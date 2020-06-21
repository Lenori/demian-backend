import jwt from 'jsonwebtoken';
import {promisify} from 'util';

import authConfig from '../../config/gameAuth';

import msgs from '../../msgs';

export default async (req, res, next) => {
    const auth = req.headers['x-game-authorization'];

    if (!auth) {
        return res
            .status(400)
            .json({error: msgs.game_auth.read.error.err_token_not_provided});
    }

    const [, token] = auth.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.game_name = decoded.game;

        if (req.game_name !== 'bill_game') {
            return res
            .status(401)
            .json({error: msgs.game_auth.read.error.err_game_invalid});
        }

        return next();
    } catch(err) {
        return res
            .status(401)
            .json({error: msgs.game_auth.read.error.err_token_invalid});
    }
}