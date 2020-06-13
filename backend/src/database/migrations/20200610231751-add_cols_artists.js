module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('artists', 'path_thumbnail', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      }),
      queryInterface.addColumn('artists', 'path_cover', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('artists', 'path_thumbnail'),
      queryInterface.removeColumn('artists', 'path_cover'),
    ]);
  },
};
