import {userService} from "../user-service";
import {passwordService} from "./password-service";

class AuthService {

    async login(username, password) {
        const user = await userService.getUserByUsername(username);
        if (!user) {
            return false;
        }

        return await passwordService.comparePassword(password, user.password);
    }
}

const authService = new AuthService();

export {authService};
