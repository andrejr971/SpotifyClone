module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'originalname', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('users', 'path', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'originalname'),
      queryInterface.removeColumn('users', 'path'),
    ]);
  },
};
