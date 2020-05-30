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

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

import budgetGameAuth from './app/middlewares/budgetGameAuth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: 'OK'});
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/games', GamesController.index);

routes.post('/budget-game', BudgetGameSessionController.store);

routes.get('/budget-game', budgetGameAuth, BudgetGameController.index);
routes.post('/budget-game/results', budgetGameAuth, BudgetGameResultsController.create);

routes.use(authMiddleware);

routes.post('/rooms', RoomController.index);

routes.put('/users', UserController.update);

routes.post('/budget-game-room', BudgetGameRoomController.store);
routes.put('/budget-game-room', BudgetGameRoomController.update);

routes.use(adminMiddleware);

routes.get('/teachers', TeacherController.index);

export default routes;