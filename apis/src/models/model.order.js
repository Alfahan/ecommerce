const { Order } = require('../database/schema')

exports.createCart = async (payload) => {
    try {
        const result = new Order(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByField = async (field) => {
    try {
        const result = await Order.find(field)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndUpdate = async (params, payload) => {
    try {
        const result = await Order.findByIdAndUpdate(
            params, 
            {
                $set: payload
            },
            { new: true }
        );
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndDelete = async (params) => {
    try {
        const result = await Order.findByIdAndDelete(params);
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.incomeMonthly = async (prev) => {
    try {
        const result = await Order.aggregate([
            {
                $match: { createdAt: { $gte: prev } }
            },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount'
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' },
                },
            },
        ]);
        return result
    } catch (err) {
        throw new Error(err)
    }
}