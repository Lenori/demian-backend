import User from '../models/User';
import BudgetGame from '../models/BudgetGame';

class GamesController {
    async index(req, res) {
        const games = [];
        const budgetGame = await BudgetGame.findAll({
            limit: 1
        });

        const {id, name} = budgetGame[0];

        const game = {
            id: id,
            name: name,
            create_room: 'budget-game-room',
            play_room: 'budget-game'
        }

        games.push(game);

        return res.json(games);
    }
}

export default new GamesController();