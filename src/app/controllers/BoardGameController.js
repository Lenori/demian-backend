import BoardGame from '../models/BoardGame';
import BoardGameProperties from '../models/BoardGameProperties';
import BoardGameCards from '../models/BoardGameCards';

class BoardGameController {
    async index(req, res) {
        const boardGame = await BoardGame.findAll({
            limit: 1,
            include: [
                {
                    model: BoardGameProperties,
                    as: 'properties',
                },
                {
                    model: BoardGameCards,
                    as: 'cards',
                }
        ]
        });

        return res.json(boardGame[0]);
    }
}

export default new BoardGameController();