import {User} from "../models/user";

class UserRepository {

    async getUserByUsername(username) {
        try {
            return User.findOne({username: username});
        } catch (error) {
            console.log(`Error when loading user by username ${username} from database: `, error);
            throw error;
        }
    }

    async addUser(user) {
        try {
            return await user.save();
        } catch (error) {
            console.log(`Error when saving user ${user} to database: `, error);
            throw error;
        }
    }
}

const userRepository = new UserRepository();

export {userRepository}
