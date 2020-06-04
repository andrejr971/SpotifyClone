import { Router } from 'express';

import ArtistController from '../../../app/controllers/ArtistController';

import admMiddleware from '../../../app/middlewares/administrator';
// import albumRoutes from './albumRoutes';

const routes = new Router();

routes.get('/', ArtistController.index);
routes.get('/:id', ArtistController.show);

routes.use(admMiddleware);
routes.post('/', ArtistController.store);
routes.put('/:id', ArtistController.update);

// routes.use('/albums', albumRoutes);

export default routes;
