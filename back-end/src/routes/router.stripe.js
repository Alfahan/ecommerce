const stripeController = require('../controllers/controller.stripe')

exports.routesConfig = function(app) {
    app.post('/payment', [
        stripeController.paymentStripe
    ])
}