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