import {Router} from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TeacherController from './app/controllers/TeacherController';

import GamesController from './app/controllers/GamesController';
import RoomController from './app/controllers/RoomController';

import BudgetGameRoomController from './app/controllers/BudgetGameRoomController';
import BudgetGameSessionController from './app/controllers/BudgetGameSessionController';
import BudgetGameController from './app/controllers/BudgetGameController';
import BudgetGameResultsController from './app/controllers/BudgetGameResultsController';

import SupplyGameController from './app/controllers/SupplyGameController';
import SupplyGameSessionController from './app/controllers/SupplyGameSessionController';
import SupplyGameRoomController from './app/controllers/SupplyGameRoomController';

import SunkGameController from './app/controllers/SunkGameController';
import SunkGameSessionController from './app/controllers/SunkGameSessionController';
import SunkGameRoomController from './app/controllers/SunkGameRoomController';

import BillGameController from './app/controllers/BillGameController';
import BillGameSessionController from './app/controllers/BillGameSessionController';
import BillGameRoomController from './app/controllers/BillGameRoomController';

import BingoGameController from './app/controllers/BingoGameController';
import BingoGameSessionController from './app/controllers/BingoGameSessionController';
import BingoGameRoomController from './app/controllers/BingoGameRoomController';

import StocksGameController from './app/controllers/StocksGameController';
import StocksGameSessionController from './app/controllers/StocksGameSessionController';
import StocksGameRoomController from './app/controllers/StocksGameRoomController';

import BoardGameController from './app/controllers/BoardGameController';
import BoardGameSessionController from './app/controllers/BoardGameSessionController';
import BoardGameRoomController from './app/controllers/BoardGameRoomController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

import budgetGameAuth from './app/middlewares/budgetGameAuth';
import supplyGameAuth from './app/middlewares/supplyGameAuth';
import sunkGameAuth from './app/middlewares/sunkGameAuth';
import billGameAuth from './app/middlewares/billGameAuth';
import bingoGameAuth from './app/middlewares/bingoGameAuth';
import stocksGameAuth from './app/middlewares/stocksGameAuth';
import boardGameAuth from './app/middlewares/boardGameAuth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: 'OK and online'});
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/games', GamesController.index);

routes.post('/budget-game', BudgetGameSessionController.store);
routes.get('/budget-game', BudgetGameController.index);
routes.post('/budget-game/results', budgetGameAuth, BudgetGameResultsController.create);

routes.post('/supply-game', SupplyGameSessionController.store);
routes.get('/supply-game', supplyGameAuth, SupplyGameController.index);

routes.post('/sunk-game', SunkGameSessionController.store);
routes.get('/sunk-game', SunkGameController.index);

routes.post('/bill-game', BillGameSessionController.store);
routes.get('/bill-game', BillGameController.index);

routes.post('/bingo-game', BingoGameSessionController.store);
routes.get('/bingo-game', bingoGameAuth, BingoGameController.index);

routes.post('/stocks-game', StocksGameSessionController.store);
routes.get('/stocks-game', stocksGameAuth, StocksGameController.index);

routes.post('/board-game', BoardGameSessionController.store);
routes.get('/board-game', boardGameAuth, BoardGameController.index);

routes.use(authMiddleware);

routes.post('/rooms', RoomController.index);

routes.put('/users', UserController.update);

routes.post('/budget-game-room', BudgetGameRoomController.store);
routes.put('/budget-game-room', BudgetGameRoomController.update);

routes.get('/supply-game-room/:room', SupplyGameRoomController.show);
routes.post('/supply-game-room', SupplyGameRoomController.store);
routes.put('/supply-game-room', SupplyGameRoomController.update);

routes.get('/sunk-game-room/:room', SunkGameRoomController.show);
routes.post('/sunk-game-room', SunkGameRoomController.store);
routes.put('/sunk-game-room', SunkGameRoomController.update);

routes.get('/bill-game-room/:room', BillGameRoomController.show);
routes.post('/bill-game-room', BillGameRoomController.store);
routes.put('/bill-game-room', BillGameRoomController.update);

routes.get('/bingo-game-room/:room', BingoGameRoomController.show);
routes.post('/bingo-game-room', BingoGameRoomController.store);
routes.put('/bingo-game-room', BingoGameRoomController.update);

routes.get('/stocks-game-room/:room', StocksGameRoomController.show);
routes.post('/stocks-game-room', StocksGameRoomController.store);
routes.put('/stocks-game-room', StocksGameRoomController.update);

routes.get('/board-game-room/:room', BoardGameRoomController.show);
routes.post('/board-game-room', BoardGameRoomController.store);
routes.put('/board-game-room', BoardGameRoomController.update);

routes.use(adminMiddleware);

routes.get('/teachers', TeacherController.index);

export default routes;