'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('board_game', [{
        name: 'Real Estate Board Game',
        description: `Learn how to be a real estate investor. Buy commercial and residential properties. Rent them out. Buy and Sell properties with your friends!`,
        money: 500,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('board_game', null, {});
  }
};
