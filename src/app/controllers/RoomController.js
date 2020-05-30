import * as Yup from 'yup';
import msg from '../../msgs';

import User from '../models/User';
import BudgetGame from '../models/BudgetGame';
import BudgetGameRoom from '../models/BudgetGameRoom';

class RoomController {
    async index(req, res) {
        const {teacher} = req.body;

        const where = teacher ? {teacher_id: teacher} : {};

        const rooms = await BudgetGameRoom.findAll({
            where: where,
            attributes: ['id'],
            include: [
                {
                model: User,
                as: 'teacher',
                attributes: ['id', 'name']
                },
                {
                model: BudgetGame,
                as: 'game',
                attributes: ['id', 'name']
                }
            ]
        })

        return res.json(rooms);
    }
}

export default new RoomController();