import { Router } from 'express';
import multer from 'multer';
import { songs } from '../../../config/multer';

import FileController from '../../../app/controllers/FileController';

const routes = new Router();
const uploads = multer(songs);

routes.post('/', uploads.single('file'), FileController.store);

export default routes;
