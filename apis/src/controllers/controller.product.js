const response = require('../commons/helpers/error_handler')
const productModel = require('../models/model.product')

exports.createProduct = async (req, res) => {
    try {
        const result = await productModel.createProduct(req.body)
        return response.Success(res, result)
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const findProductExist = await productModel.findByField({ _id: req.params.id })

        if (findProductExist[0]) {
            const updateProduct = await productModel.findByFieldAndUpdate(req.params.id, req.body)

            return response.putData(res, updateProduct, 'Product Updated')
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const findProductExist = await productModel.findByField({ _id: req.params.id })

        if (findProductExist[0]) {
            const deleteProduct = await productModel.findByFieldAndDelete(req.params.id)

            return response.deleteData(res, deleteProduct, 'Product Deleted')
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.getProductId = async (req, res) => {
    try {
        
        const findProductExist = await productModel.findByField({ _id: req.params.id })

        if (findProductExist[0]) {
            return response.readData(res, findProductExist)
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const Category = req.query.category ? { categories: {
            $in: [ req.query.category ]
        } } : null
        
        const New = req.query.new ? {
            sort: '-1',
            limit: '1'
        } : { 
            sort: '1',
            limit: undefined
        }

        const result = await productModel.findByField( Category, New.sort, New.limit )

        return response.readData(res, result)
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}