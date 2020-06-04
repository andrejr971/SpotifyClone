import { Router } from 'express';

import apiRoutes from './api/v1';

const routes = new Router();

routes.use('/v1/api', apiRoutes);

export default routes;
