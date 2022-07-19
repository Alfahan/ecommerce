const { User } = require('../database/schema') 

exports.createUser = async (payload) => {
    try {
        const result = new User(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err) 
    }
}

exports.findByField = async (field) => {
    try {
        const result = await User.find(field)
        return result
    } catch (err) {
        throw new Error(err) 
    }
}

exports.findByFieldAndUpdate = async (params, payload) => {
    try {
        const result = await User.findByIdAndUpdate(params, {
            $set: payload
        }, { new: true })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndDelete = async (field) => {
    try {
        const result = await User.findByIdAndDelete(field)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.getStatsUser = async (payload) => {
    try {
        const result = await User.aggregate([
            {
                $match: { createdAt: { $gte: payload } }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            }
        ])
        return result
    } catch (err) {
        throw new Error(err)
    }
}

