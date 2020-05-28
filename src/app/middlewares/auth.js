import jwt from 'jsonwebtoken';
import {promisify} from 'util';

import authConfig from '../../config/auth';

import msgs from '../../msgs';

export default async (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return res
            .status(400)
            .json({error: msgs.auth.read.error.err_token_not_provided});
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
            .json({error: msgs.auth.read.error.err_token_invalid});
    }
}