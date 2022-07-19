exports.Success = async (res, data, message = 'Success Create Data') => {
    const result = {
        success: true,
        statusCode: 201,
        message,
        data,
    }
    res.status(201).json(result)
}

exports.readData = async (res, data, message = 'Success Read Data') => {
    const result = {
        success: true,
        statusCode: 200,
        message,
        data,
    }
    res.status(200).json(result)
}

exports.deleteData = async (res, data, message = 'Success Deleted') => {
    const result = {
        success: true,
        statusCode: 200,
        message,
        data,
    }
    res.status(200).json(result)
}

exports.putData = (
    res,
    data,
    message = 'Success Put (Update/Replace) Data'
) => {
    const result = {
        success: true,
        statusCode: 200,
        message,
        data,
    }
    res.status(200).json(result)
}

exports.patchData = async (
    res,
    data,
    message = 'Success Patch (Update/Modify) Data'
) => {
    const result = {
        success: true,
        statusCode: 200,
        message,
        data,
    }

    res.status(200).json(result)
}

exports.dataNotFound = async (res, data, message = 'Data Not Found') => {
    const result = {
        success: false,
        statusCode: 404,
        message,
        data,
    }
    res.status(404).json(result)
}

exports.validation = async (res, data, message) => {
    const result = {
        success: false,
        statusCode: 400,
        message,
        data,
    }
    res.status(400).json(result)
}

exports.conflictExist = async (res, data, message = 'Data Already Exist') => {
    const result = {
        success: false,
        statusCode: 409,
        message,
        data,
    }
    res.status(409).json(result)
}

exports.forbidden = async (res, data, message = 'Forbidden') => {
    const result = {
        success: false,
        statusCode: 403,
        message,
        data,
    }
    res.status(403).json(result)
}

exports.failed = async (res, data, message) => {
    const result = {
        success: false,
        statusCode: 500,
        message,
        data,
    }
    res.status(500).json(result)
}

exports.Unauthorized = async (res, data, message) => {
    const result = {
        success: false,
        statusCode: 401,
        message,
        data,
    }
    res.status(401).json(result)
}

exports.Unprocessable = async (res, data, message, error) => {
    const result = {
        success: false,
        statusCode: 422,
        message,
        data,
        error,
    }
    res.status(422).json(result)
}
