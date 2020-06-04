import { Router } from 'express';

import SessionController from '../../../app/controllers/SessionController';

import userRoutes from './userRoutes';

const routes = new Router();

routes.post('/register', SessionController.store);

routes.use('/users', userRoutes);

export default routes;
