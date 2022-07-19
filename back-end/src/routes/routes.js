const userRouter = require('./router.user')
const productRouter = require('./router.product')
const cartRouter = require('./router.cart')
const orderRouter = require('./router.order')
const stripeRouter = require('./router.stripe')

exports.routesConfig = function (app) {
    userRouter.routesConfig(app),
    productRouter.routesConfig(app),
    cartRouter.routesConfig(app),
    orderRouter.routesConfig(app),
    stripeRouter.routesConfig(app)
}