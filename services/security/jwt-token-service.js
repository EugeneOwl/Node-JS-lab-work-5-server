import jwt from 'jsonwebtoken'
import _ from 'lodash'

class JwtTokenService {

    createToken(details) {
        if (typeof details !== 'object') {
            details = {}
        }

        if (!details.maxAge || typeof details.maxAge !== 'number') {
            details.maxAge = 60 * 60;
        }

        details.sessionData = _.reduce(details.sessionData || {}, (memo, val, key) => {
            if (typeof val !== 'function' && key !== 'password') {
                memo[key] = val
            }
            return memo
        }, {});

        return jwt.sign({
            data: details.sessionData
        }, JwtTokenService.JWT_SECRET, {
            expiresIn: details.maxAge,
            algorithm: JwtTokenService.CREATE_TOKEN_ALGORITHM
        });
    }

    async verifyToken(token) {
        return await new Promise((resolve, reject) => {
            jwt.verify(token, JwtTokenService.JWT_SECRET, (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err)
                }

                resolve(decodedToken)
            })
        })
    }

    static get JWT_SECRET() {
        return process.env['SPP_LAB_WORK_3_JWT_SECRET'];
    }

    static get CREATE_TOKEN_ALGORITHM() {
        return 'HS256';
    }
}

const jwtTokenService = new JwtTokenService();

export {jwtTokenService}
