import Sequelize, { Model } from 'sequelize';

class Artist extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path_thumbnail: Sequelize.STRING,
        path_cover: Sequelize.STRING,
        thumbnail: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/thumbnails/${this.path_thumbnail}`;
          },
        },
        cover: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/thumbnails/${this.path_cover}`;
          },
        },
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
