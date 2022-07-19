const { Product } = require('../database/schema')

exports.createProduct = async (payload) => {
    try {
        const result = new Product(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByField = async (field, sort, limit) => {
    try {
        const result = await Product.find(field)
            .sort(sort)
            .limit(limit)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndUpdate = async (params, payload) => {
    try {
        const result = await Product.findByIdAndUpdate(params, {
            $set: payload
        }, { new: true })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndDelete = async (field) => {
    try {
        const result = await Product.findByIdAndDelete(field)
        return result
    } catch (err) {
        throw new Error(err)
    }
}