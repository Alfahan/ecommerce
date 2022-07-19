const cartController = require('../controllers/controller.cart')
const verify = require('../commons/middlewares/verifyToken')

exports.routesConfig = function (app) {
    // Create Cart
    app.post('/cart', [
        verify.verifyTokenAndAuthorization,
        cartController.createCart
    ])

    // Update Cart
    app.put('/cart/:id', [
        verify.verifyTokenAndAuthorization,
        cartController.updateCart
    ])

    // Delete Cart
    app.delete('/cart/:id', [
        verify.verifyTokenAndAuthorization,
        cartController.deleteCart
    ])

    // Get User Cart
    app.get('/cart/user/:userId', [
        verify.verifyTokenAndAuthorization,
        cartController.myCart
    ])

    // Get All Cart
    app.get('/cart', [
        verify.verifyTokenAndAdmin,
        cartController.getAllCart
    ])
}