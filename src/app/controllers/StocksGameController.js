import StocksGame from '../models/StocksGame';
import StocksGameStocks from '../models/StocksGameStocks';

class StocksGameController {
    async index(req, res) {
        const stockGame = await StocksGame.findAll({
            limit: 1,
            include: [
                {
                model: StocksGameStocks,
                as: 'game_stocks'
                }
            ]
        });

        return res.json(stockGame[0]);
    }
}

export default new StocksGameController();