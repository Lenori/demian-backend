import {Router} from 'express';

import UserController from './app/controllers/UserController';
import PlanosController from './app/controllers/PlanosController';
import AulasController from './app/controllers/AulasController';
import OrderController from './app/controllers/OrderController';
import WirecardPaymentController from './app/controllers/WirecardPaymentController';
import OrderNotificationsController from './app/controllers/OrderNotificationsController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: 'OK and online, after server renew'});
});

routes.post('/users', UserController.store);

routes.get('/users/:id', UserController.read);

routes.get('/planos', PlanosController.index);
routes.get('/planos/:id', PlanosController.read);

routes.get('/aulas', AulasController.index);
routes.get('/aulas/:id', AulasController.read);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.read);

routes.get('/wirecard_payments/:id', WirecardPaymentController.read);

routes.get('/order_notifications/:source', OrderNotificationsController.read);

export default routes;