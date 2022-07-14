const { User } = require('../database/schema');

exports.createUser = async (payload) => {
    try {
        const result = new User(payload)
        return await result.save()
    } catch (err) {
        throw new Error(err);
    }
}