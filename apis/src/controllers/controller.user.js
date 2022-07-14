const response = require('../commons/helpers/error_handler');
const usersModel = require('../models/model.user');

exports.registerUser = async (req, res) => {
    try {
        const result = await usersModel.createUser(req.body);
        return response.Success(res, result);
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}