import { authService } from '../services/security/auth-service'
import { jwtTokenService } from "../services/security/jwt-token-service";
import { errorName } from "../consts/errors";

class AuthController {

    async login(args) {
        const authorized = await authService.login(args.username, args.password);
        if (!authorized) {
            throw new Error(errorName.UNAUTHORIZED);
        }
        return { token: jwtTokenService.createToken() };
    }

    async isAuthorized({ token }) {
        try {
            await jwtTokenService.verifyToken(token);
        } catch (e) {
            return false;
        }
        return true;
    }
}

const authController = new AuthController();

export { authController }
