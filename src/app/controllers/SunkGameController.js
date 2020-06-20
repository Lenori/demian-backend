import SunkGame from '../models/SunkGame';
import SunkGameStocks from '../models/SunkGameStocks';

class SunkGameController {
    async index(req, res) {
        const sunkGame = await SunkGame.findAll({
            limit: 1,
            include: [{
                model: SunkGameStocks,
                as: 'game_stocks'
            }]
        });

        return res.json(sunkGame[0]);
    }
}

export default new SunkGameController();