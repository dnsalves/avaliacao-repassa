import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users/:id', UserController.update);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);
// routes.get('/Report', UserController.index);

export default routes;
