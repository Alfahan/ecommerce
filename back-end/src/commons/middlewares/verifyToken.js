const jwt = require("jsonwebtoken")
const response = require('../helpers/error_handler')
const env = require('../helpers/env')

const verifyToken =  (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, env.Jwt_Sec, (err, user) => {
            if (err) {
                return response.forbidden(res, [], 'Token is Not Valid!')
            } else {
                req.user = user
                next()
            }
        })
    } else {
        return response.Unauthorized(res, [], 'You Are Not Authenticated!')
    }
}

exports.verifyTokenAndAuthorization = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return response.forbidden(res, [], 'You Are Not Allowed to do That!')
        }
    })
}

exports.verifyTokenAndAdmin = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return response.forbidden(res, [], 'You Are Not Allowed to do That!')
        }
    })
}
