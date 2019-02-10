import {userRepository} from "../repositories/user-repository";
import {User} from "../models/user";
import {passwordService} from "./security/password-service";

class UserService {

    async getUserByUsername(username) {
        return await userRepository.getUserByUsername(username);
    }

    async addUser(userToCreate) {
        if (!userToCreate) {
            userToCreate = UserService.defaultUserToCreate;
        }

        const passwordHash = await passwordService.encryptPassword(userToCreate.password);

        const userToSave = new User({
            username: userToCreate.username,
            password: passwordHash
        });
        return await userRepository.addUser(userToSave);
    }

    static get defaultUserToCreate() {
        return {
            username: 'eugene',
            password: 'password'
        }
    }
}
const userService = new UserService();

export {userService}
