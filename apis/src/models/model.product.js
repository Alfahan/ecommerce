const { Producy } = require('../database/schema')

exports.createProduct = async (payload) => {
    try {
        const result = new Product(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err)
    }
}