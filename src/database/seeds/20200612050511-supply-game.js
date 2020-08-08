'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('supply_game', [{
        name: 'Supply Game',
        description: `In this game you will be put to the test on how much you’ve learned about supply and demand. You and your team are running your own clothing company and you will be pitted against the rest of the class. Using what you learned you will attempt to predict the market and try and outsmart your competitors. Whichever team with the most money at the end wins.`,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('supply_game', null, {});
  }
};
