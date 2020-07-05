import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';

import auth from '../../config/gameAuth';
import msg from '../../msgs';

import BoardGameRoom from '../models/BoardGameRoom';

class BoardGameSessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            room: Yup.number().required(),
            pass: Yup.string().required()
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        const room = await BoardGameRoom.findByPk(req.body.room);

        if (!room) {
            return res
                .status(400)
                .json({error: msg.game_session.create.error.err_room_not_exists});
        }

        if (!(await room.checkPassword(req.body.pass))) {
            return res
                .status(401)
                .json({error: msg.game_session.create.error.err_password_not_match});
        }

        const game = 'board_game';

        return res
            .status(200)
            .json({
                success: msg.game_session.create.success,
                game_ident: 'BOARD_GAME',
                token: jwt.sign({game}, auth.secret, {
                    expiresIn: auth.expiresIn
                    })
                })
        
    }
}

export default new BoardGameSessionController();