const bcrypt = require('bcrypt');

class PasswordService {

    async encryptPassword(password) {
        try {
            return await bcrypt.hash(password, PasswordService.SALT_ROUNDS);
        } catch (error) {
            console.log(`Error when hashing password with bcrypt: `, error);
            throw error;
        }
    }

    async comparePassword(plainPassword, hash) {
        try {
            return await bcrypt.compare(plainPassword, hash);
        } catch (error) {
            console.log(`Error when comparing plain password and hash with bcrypt: `, error);
            throw error;
        }
    }

    static get SALT() {
        return process.env['SPP_LAB_WORK_3_PASSWORD_SALT'];
    }

    static get SALT_ROUNDS() {
        return 10;
    }
}

const passwordService = new PasswordService();

export {passwordService}
