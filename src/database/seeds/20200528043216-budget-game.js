'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('budget_game', [{
        name: 'Budget Game',
        description: `In this simulation you will pick the life you want. Remember budgeting isn’t about saving every dime you make, but rather it's about being able to buy some of things you want as long as you are willing to give up other things in return.`,
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
