'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Journey to the centre of the Earth',
        author: 'Julio Verne',
        created_at: Sequelize.literal('CURRENT_DATE'),
      },
      {
        title: 'What the bleep do we know?',
        author: 'Betsy',
        created_at: Sequelize.literal('CURRENT_DATE'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
