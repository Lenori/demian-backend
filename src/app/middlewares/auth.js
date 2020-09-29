import jwt from 'jsonwebtoken';
import {promisify} from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return res
            .status(400)
            .json({error: 'token not provided'});
    }

    const [, token] = auth.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;
        req.isAdmin = decoded.admin;

        return next();
    } catch(err) {
        return res
            .status(401)
            .json({error: 'invalid token'});
    }
}