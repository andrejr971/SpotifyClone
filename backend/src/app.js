import 'dotenv/config';

import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/thumbnails',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads', 'songs'))
    );
    this.server.use(
      '/songs',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads', 'songs'))
    );
    this.server.use(
      '/perfil',
      express.static(
        path.resolve(__dirname, '..', 'tmp', 'uploads', 'images', 'users')
      )
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
