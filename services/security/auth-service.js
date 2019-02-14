import {userService} from "../user-service";
import {passwordService} from "./password-service";
import {AUTH_LOGIN_NO_USER_FOUND_BY_USERNAME, AUTH_LOGIN_PASSWORD_INCORRECT} from "../../consts/messages-const";

class AuthService {

    async login(username, password) {
        const user = await userService.getUserByUsername(username);
        if (!user) {
            return AUTH_LOGIN_NO_USER_FOUND_BY_USERNAME;
        }

        const passwordCorrect = await passwordService.comparePassword(password, user.password);
        if (!passwordCorrect) {
            return AUTH_LOGIN_PASSWORD_INCORRECT;
        }

        return '';
    }
}

const authService = new AuthService();

export {authService};
