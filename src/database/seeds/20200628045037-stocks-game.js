'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('stocks_game', [{
        name: 'Stocks Game 2',
        description: `Create your first stock portfolio! This game will show you the opportunity to practice choosing which stocks to invest in. `,
        money: 1500,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('stocks_game', null, {});
  }
};
