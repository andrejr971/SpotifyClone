import Sequelize from 'sequelize';

/**
 * import models
 */
import User from '../app/models/User';
import Artist from '../app/models/Artist';
import Album from '../app/models/Album';
import Song from '../app/models/Song';
import Playlist from '../app/models/Playlist';

import configDatabase from '../config/database';

const models = [User, Artist, Album, Song, Playlist];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
