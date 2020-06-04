import { Router } from 'express';
import multer from 'multer';
import { imagesUsers } from '../../../config/multer';

import UserController from '../../../app/controllers/UserController';

import admMiddleware from '../../../app/middlewares/administrator';

const routes = new Router();
const uploads = multer(imagesUsers);

routes.put('/', uploads.single('file'), UserController.update);

routes.use(admMiddleware);
routes.get('/', UserController.index);

export default routes;
