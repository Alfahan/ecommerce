const usersController = require('../controllers/controller.user');

exports.routesConfig = function (app) {
    // Register 
    app.post('/register', [
        usersController.registerUser
    ])

    // Login
    app.post('/login', [
        usersController.loginUser
    ])
}