import { Router } from 'express';
import multer from 'multer';

import { songs } from '../../../config/multer';

import ArtistController from '../../../app/controllers/ArtistController';

import admMiddleware from '../../../app/middlewares/administrator';

const uploadSong = multer(songs);

const routes = new Router();

routes.get('/', ArtistController.index);
routes.get('/:id', ArtistController.show);

routes.use(admMiddleware);
routes.post(
  '/',
  uploadSong.fields([{ name: 'thumbnail' }, { name: 'cover' }]),
  ArtistController.store
);
routes.put(
  '/:id',
  uploadSong.fields([{ name: 'thumbnail' }, { name: 'cover' }]),
  ArtistController.update
);

// routes.use('/albums', albumRoutes);

export default routes;
