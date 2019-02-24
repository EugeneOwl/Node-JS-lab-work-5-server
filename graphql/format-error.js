import { errorType } from "../consts/errors";

function formatError(error) {
    const errorObject = errorType[error.message];
    return {
        statusCode: errorObject.statusCode,
        message: errorObject.message
    };
}

export { formatError }
