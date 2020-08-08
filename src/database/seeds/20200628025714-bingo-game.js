'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('bingo_game', [{
        name: 'Bingo Game',
        description: `Bingo but with sales tax. You will be given a question and a rate grid, and you will need to figure out the tax. The first one to get 5 in a row wins. Remember to shout out Bingo if you have it!`,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('bingo_game', null, {});
  }
};
