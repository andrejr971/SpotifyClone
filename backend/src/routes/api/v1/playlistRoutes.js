import { Router } from 'express';

import PlaylistController from '../../../app/controllers/PlaylistController';
import PlaylistSongController from '../../../app/controllers/PlaylistSongController';

const routes = new Router();

routes.get('/', PlaylistController.index);
routes.post('/', PlaylistController.store);
routes.put('/:id', PlaylistController.update);
routes.get('/:id', PlaylistController.show);
routes.delete('/:id', PlaylistController.delete);

routes.post('/:id/:song_id', PlaylistSongController.store);
routes.delete('/:id/:song_id', PlaylistSongController.delete);

export default routes;
