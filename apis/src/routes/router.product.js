const productController = require('../controllers/controller.product')
const verify = require('../commons/middlewares/verifyToken')

exports.routesConfig = function (app) {
    // Create Product
    app.post('/product', [
        verify.verifyTokenAndAdmin,
        productController.createProduct
    ])
}