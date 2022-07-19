const response = require('../commons/helpers/error_handler')
const orderModel = require('../models/model.order')

exports.createOrder = async (req, res) => {
    try {
        const result = await orderModel.createCart(req.body)
        return response.Success(res, result)
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const findOrderExist = await orderModel.findByField({ _id: req.params.id })

        if (findOrderExist[0]) {
            const updateOrder = await orderModel.findByFieldAndUpdate(req.params.id, req.body)
            return response.putData(res, updateOrder, 'Order Updated')
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        
        const findOrderExist = await orderModel.findByField({ _id: req.params.id })

        if (findOrderExist[0]) {
            const deleteOrder = await orderModel.findByFieldAndDelete(req.params.id)
            return response.delete(res, deleteOrder, 'Order Deleted')
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.myOrder = async (req, res) => {
    try {
        const findMyOrder = await orderModel.findByField({ userId: req.params.userId })

        if (findMyOrder[0]) {
            return response.readData(res, findMyOrder)
        } else {
            return response.dataNotFound(res, [])
        }
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}

exports.incomeMonthly = async (req, res) => {
    try {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

        const income = await order.incomeMonthly(previousMonth)

        return response.readData(res, income)
    } catch (err) {
        return response.failed(res, [], err.message)
    }
}