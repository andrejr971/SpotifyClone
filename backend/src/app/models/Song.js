import Sequelize, { Model } from 'sequelize';

class Song extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        originalname: Sequelize.STRING,
        path_thumbnail: Sequelize.STRING,
        path_song: Sequelize.STRING,
        thumbnail: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/thumbnails/${this.path_thumbnail}`;
          },
        },
        song: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/songs/${this.path_song}`;
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
    this.belongsTo(models.Album, {
      as: 'album',
      foreignKey: 'album_id',
    });
    this.belongsToMany(models.Playlist, {
      foreignKey: 'song_id',
      through: 'playlist_songs',
      as: 'playlists',
    });
  }
}

export default Song;
