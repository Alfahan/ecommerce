const userRouter = require('./router.user')
const productRouter = require('./router.product')

exports.routesConfig = function (app) {
    userRouter.routesConfig(app),
    productRouter.routesConfig(app)
}