'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('bill_game', [{
        name: 'Bill Game',
        description: `We are having a tough month as far as paying bills. We have bills that are about to be due and we don’t have enough funds to pay them all. Choose which bills to pay!`,
        money: 2000,
        score: 700,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('bill_game', null, {});
  }
};
