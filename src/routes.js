import {Router} from 'express';

import UserController from './app/controllers/UserController';
import PlanosController from './app/controllers/PlanosController';
import AulasController from './app/controllers/AulasController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: 'OK and online'});
});

routes.post('/users', UserController.store);

routes.get('/users/:id', UserController.read);
routes.get('/planos', PlanosController.read);
routes.get('/aulas', AulasController.read);

routes.use(authMiddleware);

export default routes;