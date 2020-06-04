module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('playlist_songs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      playlist_id: {
        type: Sequelize.INTEGER,
        references: { model: 'playlists', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      song_id: {
        type: Sequelize.INTEGER,
        references: { model: 'songs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('playlist_songs');
  },
};
