const userRouter = require('./router.user')

exports.routesConfig = function (app) {
    userRouter.routesConfig(app)
}