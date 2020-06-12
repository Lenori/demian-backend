'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('supply_game', [{
        name: 'Supply Game',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('supply_game', null, {});
  }
};
