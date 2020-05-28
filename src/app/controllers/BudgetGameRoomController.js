import * as Yup from 'yup';
import msg from '../../msgs';

import User from '../models/User';
import BudgetGame from '../models/BudgetGame';
import BudgetGameRoom from '../models/BudgetGameRoom';

class BudgetGameRoomController {
    async store(req, res) {
        const schema = Yup.object().shape({
            game_id: Yup.number().required(),
            pass: Yup.string().required().min(4),
            confirmPass: Yup.string().required().oneOf([Yup.ref('pass')])
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }

        const gameExists = await BudgetGame.findByPk(req.body.game_id);

        if (!gameExists) {
            return res
                .status(400)
                .json({error: msg.room.create.error.err_game_not_exists});
        }

        const isTeacher = await User.findOne({
            where: {
                id: req.userId,
                admin: false
            }
        });

        if (!isTeacher) {
            return res
                .status(401)
                .json({error: msg.room.create.error.err_user_not_teacher});
        }

        await BudgetGameRoom.create({
            game_id: req.body.game_id,
            teacher_id: req.userId,
            status: 0,
            pass: req.body.pass
        });        

        return res
            .status(200)
            .json({success: msg.room.create.success})
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            room: Yup.number().required(),
            status: Yup.number().required()
        });

        try {            
            await schema.validate(req.body);
        } catch(err) {
            return res
                .status(400)
                .json({error: err.errors});
        }
        
        const user = await User.findByPk(req.userId);
        
        const room = await BudgetGameRoom.findByPk(req.body.room);

        if (!room) {
            return res
                .status(400)
                .json({error: msg.room.update.error.err_room_not_exists});
        }

        if (!user.admin) {
            if (room.teacher_id !== req.userId) {
                return res
                .status(401)
                .json({error: msg.room.update.error.err_user_not_authorized});
            }
        }

        const {id} = await room.update({status: req.body.status});

        return res.json({
            success: msg.room.update.success,
            room: {
                id: id
            }
        });
    }
}

export default new BudgetGameRoomController();