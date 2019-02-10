import {authService} from '../services/security/auth-service'
import {jwtTokenService} from "../services/security/jwt-token-service";

class AuthController {

    async login(request, response) {
        console.log('GOT COOKIE: ', request['token']);

        const errorMessage = await authService.login(request.body.username, request.body.password);
        if (errorMessage) {
            response.status(401).send({message: errorMessage});
            return;
        }
        response.cookie('token', jwtTokenService.createToken(),{domain:'example.com'}).send();
    }
}

const authController = new AuthController();

export {authController}
