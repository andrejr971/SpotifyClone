import { Router } from 'express';
import multer from 'multer';
import { songs } from '../../../config/multer';

import songRoutes from './songRoutes';

import AlbumController from '../../../app/controllers/AlbumController';
import admMiddleware from '../../../app/middlewares/administrator';

const routes = new Router();
const uploads = multer(songs);

routes.get('/', AlbumController.index);
routes.get('/:id', AlbumController.show);

routes.use('/songs', songRoutes);

routes.use(admMiddleware);
routes.post('/:artist_id', uploads.single('file'), AlbumController.store);
routes.put('/:id', uploads.single('file'), AlbumController.update);

export default routes;
