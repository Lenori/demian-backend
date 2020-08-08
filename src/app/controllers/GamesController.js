import User from '../models/User';

import BudgetGame from '../models/BudgetGame';
import SupplyGame from '../models/SupplyGame';
import SunkGame from '../models/SunkGame';
import BillGame from '../models/BillGame';
import BingoGame from '../models/BingoGame';
import StocksGame from '../models/StocksGame';
import BoardGame from '../models/BoardGame';

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

        const boardGame = await BoardGame.findAll({
            limit: 1
        });

        const {id, name, description} = budgetGame[0];

        const game = {
            id: id,
            name: name,
            description: description,
            create_room: 'budget-game-room',
            play_room: 'budget-game'
        }

        games.push(game);

        const id2 = supplyGame[0].id;
        const name2 = supplyGame[0].name;
        const description2 = supplyGame[0].description;

        const game2 = {
            id: id2,
            name: name2,
            description: description2,
            create_room: 'supply-game-room',
            play_room: 'supply-game'
        }

        games.push(game2);

        const id3 = sunkGame[0].id;
        const name3 = sunkGame[0].name;
        const description3 = sunkGame[0].description;

        const game3 = {
            id: id3,
            name: name3,
            description: description3,
            create_room: 'sunk-game-room',
            play_room: 'sunk-game'
        }

        games.push(game3);

        const id4 = billGame[0].id;
        const name4 = billGame[0].name;
        const description4 = billGame[0].description;

        const game4 = {
            id: id4,
            description: description4,
            name: name4,
            create_room: 'bill-game-room',
            play_room: 'bill-game'
        }

        games.push(game4);

        const id5 = bingoGame[0].id;
        const name5 = bingoGame[0].name;
        const description5 = bingoGame[0].description;

        const game5 = {
            id: id5,
            description: description5,
            name: name5,
            create_room: 'bingo-game-room',
            play_room: 'bingo-game'
        }

        games.push(game5);

        const id6 = stocksGame[0].id;
        const name6 = stocksGame[0].name;
        const description6 = stocksGame[0].description;

        const game6 = {
            id: id6,
            description: description6,
            name: name6,
            create_room: 'stocks-game-room',
            play_room: 'stocks-game'
        }

        games.push(game6);

        const id7 = boardGame[0].id;
        const name7 = boardGame[0].name;
        const description7 = boardGame[0].description;

        const game7 = {
            id: id7,
            description: description7,
            name: name7,
            create_room: 'board-game-room',
            play_room: 'board-game'
        }

        games.push(game7);

        return res.json(games);
    }
}

export default new GamesController();