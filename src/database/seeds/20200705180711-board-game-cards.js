'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from board_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('board_game_cards', [
        {
          game_id: gameRows[0].id,
          code: 1,
          text: 'No event.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 2,
          text: 'Economy crashes - Property values and rent reduce by 25% for one round.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 3,
          text: 'Economy booms - Property values and rent increase by 25% for one round.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 4,
          text: 'Tenants are dissatisfied with the way the property is managed. Everyone without a property management company has to discount their rent by 50% for two rounds.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 5,
          text: 'Damage to your properties requires you to pay 25% of its value in repairs.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 6,
          text: 'Times are tough! Your tenants did not pay rent.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 7,
          text: 'Property tax is due pay 10% of all property values.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          code: 8,
          text: 'No event.',
          created_at: new Date(),
          updated_at: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('board_game_cards', null, {});
  }
};
