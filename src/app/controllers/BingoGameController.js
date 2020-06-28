import BingoGame from '../models/BingoGame';
import BingoGameInfos from '../models/BingoGameInfos';
import BingoGameQuestions from '../models/BingoGameQuestions';

class BingoGameController {
    async index(req, res) {
        const bingoGame = await BingoGame.findAll({
            limit: 1,
            include: [
                {
                model: BingoGameInfos,
                as: 'game_info'
                },
                {
                model: BingoGameQuestions,
                as: 'game_questions'
                }
            ]
        });

        return res.json(bingoGame[0]);
    }
}

export default new BingoGameController();