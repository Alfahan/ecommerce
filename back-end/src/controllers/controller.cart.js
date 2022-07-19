const response = require('../commons/helpers/error_handler')
const cartModel = require('../models/model.cart')

exports.createCart = async (req, res) => {
    try {
        const result = await cartModel.createCart(req.body)
        return response.Success(res, result)
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.updateCart = async (req, res) => {
    try {
        const findCartExist = await cartModel.findByField(req.params.id) 

        if (findCartExist[0]) {
            const updateCart = await cartModel.findByFieldAndUpdate(req.params.id, req.body)
            
            return response.putData(res, updateCart, 'Cart Update')
        } else {
            return response.failed(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const findCartExist = await cartModel.findByField(req.params.id)

        if (findCartExist[0]) {
            const deleteCart = await cartModel.findByFieldAndDelete(req.params.id)

            return response.deleteData(res, deleteCart, 'Cart Deleted')
        } else {
            return response.failed(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.myCart = async (req, res) => {
    try {
        const result = await cartModel.findByField({ userId: req.params.userId })

        if (result[0]) {
            return response.readData(res, result[0])
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.getAllCart = async (req, res) => {
    try {
        const result = await cartModel.findByField()
        if (result.length !== 0) {
            return response.readData(res, result)
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}