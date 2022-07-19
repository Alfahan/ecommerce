const { Cart } = require('../database/schema')

exports.createCart = async (payload) => {
    try {
        const result = new Cart(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByField = async (field) => {
    try {
        const result = await Cart.find(field)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndUpdate = async (params, payload) => {
    try {
        const result = await Cart.findByIdAndUpdate(params, {
            $set: payload
        }, { new: true} 
        )
        return result
    } catch (err) {
        throw new Error(err)
    }
}

exports.findByFieldAndDelete = async (params) => {
    try {
        const result = await Cart.findByIdAndDelete(params)
        return result
    } catch (err) {
        throw new Error(err)
    }
}