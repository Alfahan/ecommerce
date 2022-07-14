const { User } = require('../database/schema');

exports.createUser = async (payload) => {
    try {
        const result = new User(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err);
    }
}

exports.findByField = async (field) => {
    try {
        const result = await User.find(field)
        return result
    } catch (err) {
        throw new Error(err);
    }
}