import User from '../models/User';

import BudgetGame from '../models/BudgetGame';
import SupplyGame from '../models/SupplyGame';
import SunkGame from '../models/SunkGame';

class GamesController {
    async index(req, res) {
        const games = [];

        const budgetGame = await BudgetGame.findAll({
            limit: 1
        });

        const supplyGame = await SupplyGame.findAll({
            limit: 1
        });

        const sunkGame = await SunkGame.findAll({
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

        const id2 = supplyGame[0].id;
        const name2 = supplyGame[0].name;

        const game2 = {
            id: id2,
            name: name2,
            create_room: 'supply-game-room',
            play_room: 'supply-game'
        }

        const id3 = sunkGame[0].id;
        const name3 = sunkGame[0].name;

        const game3 = {
            id: id3,
            name: name3,
            create_room: 'sunk-game-room',
            play_room: 'sunk-game'
        }

        games.push(game3);

        return res.json(games);
    }
}

export default new GamesController();