import Sequelize, { Model } from 'sequelize';

class Artist extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Album, {
      as: 'albuns',
      foreignKey: 'artist_id',
    });
    this.hasMany(models.Song, {
      as: 'songs',
      foreignKey: 'artist_id',
    });
  }
}

export default Artist;
