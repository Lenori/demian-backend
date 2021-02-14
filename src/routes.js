import {Router} from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import PlanosController from './app/controllers/PlanosController';
import AulasController from './app/controllers/AulasController';
import OrderController from './app/controllers/OrderController';
import WirecardPaymentController from './app/controllers/WirecardPaymentController';
import OrderNotificationsController from './app/controllers/OrderNotificationsController';
import ImagesController from './app/controllers/ImagesController';
import TextsController from './app/controllers/TextsController';
import LinksController from './app/controllers/LinksController';
import TrialsController from './app/controllers/TrialsController';

import CorsMiddleware from './app/middlewares/cors';

import multerConfig from './config/multer'

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
    return res.json({message: 'OK and online, after server renew'});
});

routes.use(CorsMiddleware);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
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

routes.get('/texts', TextsController.index);
routes.get('/texts/:id', TextsController.read);

routes.get('/images', ImagesController.index);
routes.get('/images/:id', ImagesController.read);

routes.get('/links', LinksController.index);
routes.get('/links/:id', LinksController.read);

routes.post('/texts', TextsController.update);

routes.post('/aulas', AulasController.update);

routes.post('/planos', PlanosController.update);

routes.post('/links/file', upload.single('file'), LinksController.update);
routes.post('/links', LinksController.update);

routes.post('/trials', TrialsController.store);
routes.get('/trials', TrialsController.index);
routes.get('/trials/:id', TrialsController.read);

export default routes;