const productController = require('../controllers/controller.product')
const verify = require('../commons/middlewares/verifyToken')

exports.routesConfig = function (app) {
    // Create Product
    app.post('/product', [
        verify.verifyTokenAndAdmin,
        productController.createProduct
    ])

    // Udpate Product
    app.put('/product/:id', [
        verify.verifyTokenAndAdmin,
        productController.updateProduct
    ])

    // Delete Product
    app.delete('/product/:id', [
        verify.verifyTokenAndAdmin,
        productController.deleteProduct
    ])

    // Get Product
    app.get('/product/:id', [
        productController.getProductId
    ])

    // Get All Product
    app.get('/product', [
        productController.getAllProduct
    ])
}