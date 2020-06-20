'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from sunk_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('sunk_game_stocks', [
        {
          game_id: gameRows[0].id,
          name: 'Alpha Car Dealership',
          buy_on_start: true,
          start_value: 10.00,
          round_1: 8.00,
          round_2: 7.00,
          round_3: 6.00,
          round_4: 4.50,
          round_5: 1.50,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Beta Premium Clothes',
          buy_on_start: false,
          start_value: null,
          round_1: null,
          round_2: null,
          round_3: null,
          round_4: 10.00,
          round_5: 10.00,
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('sunk_game_stocks', null, {});
  }
};
