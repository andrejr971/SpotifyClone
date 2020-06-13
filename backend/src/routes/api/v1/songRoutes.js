import { Router } from 'express';
import multer from 'multer';

import { songs } from '../../../config/multer';

import SongController from '../../../app/controllers/SongController';

import admMiddleware from '../../../app/middlewares/administrator';

const routes = new Router();
const uploadSong = multer(songs);

// routes.get('/:album_id', SongController.index);
routes.get('/:id', SongController.show);

routes.use(admMiddleware);
routes.post(
  '/:artist_id/:album_id',
  uploadSong.fields([{ name: 'file' }, { name: 'song' }]),
  SongController.store
);
routes.put(
  '/:artist_id/:album_id/:id',
  uploadSong.fields([{ name: 'file' }, { name: 'song' }]),
  SongController.update
);

routes.delete('/:id', SongController.delete);

export default routes;
