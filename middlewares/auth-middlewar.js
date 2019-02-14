import {jwtTokenService} from '../services/security/jwt-token-service'
import { JWT_TOKEN_KEY } from "../consts/json-keys";
import { JsonWebTokenError } from "jsonwebtoken";
import { JWT_TOKEN_VALIDATION, JWT_TOKEN_VALIDATION_FAILED } from "../consts/logs-const";
import { NO_JWT_TOKEN_PROVIDED } from "../consts/messages-const";

class AuthMiddleware {

    async validateJwtTokenCookie(request, response, next) {
        const token = request.cookies[JWT_TOKEN_KEY];
        console.log(JWT_TOKEN_VALIDATION, token);
        try {
            await jwtTokenService.verifyToken(token);
        } catch (e) {
            if (e instanceof JsonWebTokenError) {
                console.error(JWT_TOKEN_VALIDATION_FAILED + token);
                response.status(401).send({ message: NO_JWT_TOKEN_PROVIDED });
                return;
            }
            console.error(e);
        }
        next();
    }
}

const authMiddleware = new AuthMiddleware();

export {authMiddleware}
