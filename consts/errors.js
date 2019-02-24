const errorName = {
    UNAUTHORIZED: 'UNAUTHORIZED'
};

const errorType = {
    UNAUTHORIZED: {
        statusCode: 401,
        message: 'Authentication is required for the operation.'
    }
};

export { errorName, errorType }
