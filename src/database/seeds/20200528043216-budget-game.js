'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('budget_game', [{
        name: 'Budget Game',
        sallary: 48000,
        tax: 20,
        loan: 280,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('budget_game', null, {});
  }
};
