const response = require('../commons/helpers/error_handler')
const usersModel = require('../models/model.user')
const CryptoJS = require('crypto-js')
const env = require('../commons/helpers/env')
const jwt = require("jsonwebtoken")
const user = require('../database/user')

exports.registerUser = async (req, res) => {
    try {
        const findUserExist = await usersModel.findByField({ email: req.body.email })
        if (findUserExist.length === 0){
            const payload = {
                username: req.body.username,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, env.Pass_Sec).toString()
            }
            const result = await usersModel.createUser(payload);
            return response.Success(res, result);
        } else {
            return response.conflictExist(res, [], 'Email Already Registered');
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const findUserExist = await usersModel.findByField({ username: req.body.username })
        if (findUserExist[0]) {
            const data = findUserExist[0]
            const hashPassword = CryptoJS.AES.decrypt(data.password, env.Pass_Sec)
            
            const originalPassword = hashPassword.toString(CryptoJS.enc.Utf8)
            if (originalPassword !== req.body.password) {
                return response.Unauthorized(res, [], 'Wrong Credentials!')
            } else {
                console.log(data);
                const accessToken = jwt.sign({
                    id: data._id,
                    isAdmin: data.isAdmin
                }, env.Jwt_Sec, { expiresIn: "3d" })

                const { password, ...others } = data._doc
                
                return response.Success(res, {...others, accessToken})
            }
        } else {
            return response.Unauthorized(res, [], 'Wrong Credentials!')
        }

    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const findUserExist = await usersModel.findByField({ _id: req.params.id })

        if(findUserExist[0]){
            if(req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(
                    req.body.password,
                    env.Pass_Sec
                ).toString
            }
    
            const updatedUser = await usersModel.findByFieldAndUpdate(req.params.id, req.body)
    
            return response.putData(res, updatedUser, 'User Updated')
        } else {
            return response.dataNotFound(res, [])
        }

    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.deleteUser = async (req, res) => {
    try { 
        const findUserExist = await usersModel.findByField({ _id: req.params.id })

        if(findUserExist[0]){
            const deleteUser = await usersModel.findByFieldAndDelete(req.params.id)
            return response.deleteData(res, deleteUser)
        } else {
            return response.dataNotFound(res, [])
        }

    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.getUser = async (req, res) => {
    try {
        const findUserExist = await usersModel.findByField({ _id: req.params.id })

        if(findUserExist[0]){
            const data = findUserExist[0]
            const { password, ...others } = data._doc
            return response.readData(res, others)
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const findUserExist = await usersModel.findByField()

        if(findUserExist.length !== 0){
            return response.readData(res, findUserExist)
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}