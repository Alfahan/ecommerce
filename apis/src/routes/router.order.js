const verify = require('../commons/middlewares/verifyToken')
const orderController = require('../controllers/controller.order')

exports.routesConfig = function (app) {
    // Create Order
    app.post('/order', [
        verify.verifyTokenAndAuthorization,
        orderController.createOrder
    ])

    // Update Order
    app.put('/order/:id', [
        verify.verifyTokenAndAdmin,
        orderController.updateOrder
    ])

    // Delete Order
    app.delete('/order/:id', [
        verify.verifyTokenAndAdmin,
        orderController.deleteOrder
    ])

    // My Order
    app.get('/order/:userId', [
        verify.verifyTokenAndAuthorization,
        orderController.myOrder
    ])

    // Get Monthly Income
    app.get('/income', [
        verify.verifyTokenAndAdmin,
        orderController.incomeMonthly
    ])

}