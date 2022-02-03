module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('users', 'admin', {
     type: Sequelize.BOOLEAN,
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('users', 'admin');
  },
};
