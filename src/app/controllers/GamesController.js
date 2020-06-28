import User from '../models/User';

import BudgetGame from '../models/BudgetGame';
import SupplyGame from '../models/SupplyGame';
import SunkGame from '../models/SunkGame';
import BillGame from '../models/BillGame';
import BingoGame from '../models/BingoGame';
import StocksGame from '../models/StocksGame';

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

        const billGame = await BillGame.findAll({
            limit: 1
        });

        const bingoGame = await BingoGame.findAll({
            limit: 1
        });

        const stocksGame = await StocksGame.findAll({
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

        games.push(game2);

        const id3 = sunkGame[0].id;
        const name3 = sunkGame[0].name;

        const game3 = {
            id: id3,
            name: name3,
            create_room: 'sunk-game-room',
            play_room: 'sunk-game'
        }

        games.push(game3);

        const id4 = billGame[0].id;
        const name4 = billGame[0].name;

        const game4 = {
            id: id4,
            name: name4,
            create_room: 'bill-game-room',
            play_room: 'bill-game'
        }

        games.push(game4);

        const id5 = bingoGame[0].id;
        const name5 = bingoGame[0].name;

        const game5 = {
            id: id5,
            name: name5,
            create_room: 'bingo-game-room',
            play_room: 'bingo-game'
        }

        games.push(game5);

        const id6 = stocksGame[0].id;
        const name6 = stocksGame[0].name;

        const game6 = {
            id: id6,
            name: name6,
            create_room: 'stocks-game-room',
            play_room: 'stocks-game'
        }

        games.push(game6);

        return res.json(games);
    }
}

export default new GamesController();