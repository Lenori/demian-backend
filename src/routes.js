import {Router} from 'express';

import UserController from './app/controllers/UserController';
import PlanosController from './app/controllers/PlanosController';
import AulasController from './app/controllers/AulasController';
import OrderController from './app/controllers/OrderController';
import WirecardPaymentController from './app/controllers/WirecardPaymentController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: 'OK and online'});
});

routes.post('/users', UserController.store);

routes.get('/users/:id', UserController.read);

routes.get('/planos', PlanosController.index);
routes.get('/planos/:id', PlanosController.read);

routes.get('/aulas', AulasController.index);
routes.get('/aulas/:id', AulasController.read);

routes.post('/orders', OrderController.store);
routes.get('/orders/:id', OrderController.read);

routes.get('/wirecard_payments/:id', WirecardPaymentController.read);

export default routes;