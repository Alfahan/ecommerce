const userRouter = require('./router.user')
const productRouter = require('./router.product')
const cartRouter = require('./router.cart')

exports.routesConfig = function (app) {
    userRouter.routesConfig(app),
    productRouter.routesConfig(app),
    cartRouter.routesConfig(app)
}