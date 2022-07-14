const usersController = require('../controllers/controller.user')
const verify = require('../commons/middlewares/verifyToken')

exports.routesConfig = function (app) {
    // Register 
    app.post('/register', [
        usersController.registerUser
    ])

    // Login
    app.post('/login', [
        usersController.loginUser
    ])

    // Update User
    app.put('/user/:id', [
        verify.verifyTokenAndAuthorization,
        usersController.updateUser
    ])

    // Delete  User
    app.delete('/user/:id', [
        verify.verifyTokenAndAuthorization,
        usersController.deleteUser
    ])

    // Get User
    app.get('/user/:id', [
        verify.verifyTokenAndAdmin,
        usersController.getUser
    ])

    // Get All User 
    app.get('/user', [
        verify.verifyTokenAndAdmin,
        usersController.getAllUser
    ])
}