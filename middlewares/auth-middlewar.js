class AuthMiddleware {

    validateJwtTokenCookie(request, response, next) {
        console.log('validate: ', request.cookies['token']); // TODO remove
        next();
    }
}

const authMiddleware = new AuthMiddleware();

export {authMiddleware}
