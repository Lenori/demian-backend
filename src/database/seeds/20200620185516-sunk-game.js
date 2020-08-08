'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('sunk_game', [{
        name: 'Stocks Game',
        description: `You will track the stock given to you through multiple rounds and you will have to decide every round what to do with it- buy or sell.`,
        stocks: 100,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('sunk_game', null, {});
  }
};
