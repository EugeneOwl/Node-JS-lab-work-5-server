import { authService } from '../services/security/auth-service'
import { jwtTokenService } from "../services/security/jwt-token-service";
import { JWT_TOKEN_KEY } from "../consts/json-keys";
import { JWT_COOKIE_LIFETIME_MILLISECONDS } from "../consts/security-const";
import { JsonWebTokenError } from "jsonwebtoken";
import { NO_JWT_TOKEN_PROVIDED } from "../consts/messages-const";
import { JWT_TOKEN_VALIDATION } from "../consts/logs-const";

class AuthController {

    async login(request, response) {
        const errorMessage = await authService.login(request.body.username, request.body.password);

        if (errorMessage) {
            response.status(401).send({ message: errorMessage });
            return;
        }
        response.cookie(
            JWT_TOKEN_KEY,
            jwtTokenService.createToken(),
            {
                maxAge: JWT_COOKIE_LIFETIME_MILLISECONDS,
                httpOnly: true
            }
        ).send();
    }

    async isAuthorized(request, response) {
        const token = request.cookies[JWT_TOKEN_KEY];
        console.log(JWT_TOKEN_VALIDATION, token);
        try {
            await jwtTokenService.verifyToken(token);
        } catch (e) {
            if (e instanceof JsonWebTokenError) {
                response.send(false);
                return;
            }
            console.log(NO_JWT_TOKEN_PROVIDED, token);
        }
        response.send(true);
    }

    logout(request, response) {
        return response.cookie(JWT_TOKEN_KEY, '').send();
    }
}

const authController = new AuthController();

export { authController }
