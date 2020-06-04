import { Router } from 'express';

import UserController from '../../../app/controllers/UserController';
import SessionController from '../../../app/controllers/SessionController';
import authMiddleware from '../../../app/middlewares/auth';

import userRoutes from './userRoutes';
import artistRoutes from './artistRoutes';
import albumRoutes from './albumRoutes';
import playlistRoutes from './playlistRoutes';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/register', UserController.store);

routes.use(authMiddleware);
routes.use('/users', userRoutes);
routes.use('/user/playlists', playlistRoutes);
routes.use('/artists', artistRoutes);
routes.use('/artist/albums', albumRoutes);

export default routes;
