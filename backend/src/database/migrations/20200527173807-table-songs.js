module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('songs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      artist_id: {
        type: Sequelize.INTEGER,
        references: { model: 'artists', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      album_id: {
        type: Sequelize.INTEGER,
        references: { model: 'albums', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      path_thumbnail: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      path_song: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
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
    return queryInterface.dropTable('songs');
  },
};
