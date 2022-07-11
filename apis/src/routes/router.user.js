const usersController = require('../controllers/controller.user');

exports.routesConfig = function (app) {
    // Register 
    app.post('/register', [
        usersController.registerUser
    ])
}