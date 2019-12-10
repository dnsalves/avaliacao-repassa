import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AvaliationController from './app/controllers/AvaliationController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users/:id', UserController.update);
routes.get('/users/:id?', UserController.index);
routes.delete('/users/:id', UserController.delete);

routes.get('/avaliations/:employeeId', AvaliationController.index);
routes.post('/avaliations/:employeeId', AvaliationController.store);
routes.put('/avaliations/:id', AvaliationController.update);

export default routes;
