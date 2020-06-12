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

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

import budgetGameAuth from './app/middlewares/budgetGameAuth';
import supplyGameAuth from './app/middlewares/supplyGameAuth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: 'OK and online'});
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/games', GamesController.index);

routes.post('/budget-game', BudgetGameSessionController.store);
routes.get('/budget-game', budgetGameAuth, BudgetGameController.index);
routes.post('/budget-game/results', budgetGameAuth, BudgetGameResultsController.create);

routes.post('/supply-game', SupplyGameSessionController.store);
routes.get('/supply-game', supplyGameAuth, SupplyGameController.index);

routes.use(authMiddleware);

routes.post('/rooms', RoomController.index);

routes.put('/users', UserController.update);

routes.post('/budget-game-room', BudgetGameRoomController.store);
routes.put('/budget-game-room', BudgetGameRoomController.update);

routes.post('/supply-game-room', SupplyGameRoomController.store);
routes.put('/supply-game-room', SupplyGameRoomController.update);

routes.use(adminMiddleware);

routes.get('/teachers', TeacherController.index);

export default routes;