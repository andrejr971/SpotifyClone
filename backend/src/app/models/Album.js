import Sequelize, { Model } from 'sequelize';

class Album extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        originalname: Sequelize.STRING,
        path: Sequelize.STRING,
        thumbnail: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/thumbnails/${this.path}`;
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
    this.belongsTo(models.Artist, {
      as: 'artist',
      foreignKey: 'artist_id',
    });
    this.hasMany(models.Song, {
      as: 'songs',
      foreignKey: 'album_id',
    });
  }
}

export default Album;
