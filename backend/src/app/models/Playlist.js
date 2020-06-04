import Sequelize, { Model } from 'sequelize';

class Playlist extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      as: 'author',
      foreignKey: 'user_id',
    });
    this.belongsToMany(models.Song, {
      foreignKey: 'playlist_id',
      through: 'playlist_songs',
      as: 'songs',
    });
  }
}

export default Playlist;
