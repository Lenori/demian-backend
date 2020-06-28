'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from bingo_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('bingo_game_infos', [
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          medicare_tax_rate: '1.45% (An additional .09% if above 200k)',
          local_tax_rate: '5.6%',
          social_security_rate: '6.2% (for income below $132,900)',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          medicare_tax_rate: '1.45% (An additional .09% if above 200k)',
          local_tax_rate: '7.25%',
          social_security_rate: '6.2% (for income below $132,900)',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          medicare_tax_rate: '1.45% (An additional .09% if above 200k)',
          local_tax_rate: '8.82%',
          social_security_rate: '6.2% (for income below $132,900)',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          medicare_tax_rate: '1.45% (An additional .09% if above 200k)',
          local_tax_rate: '6.5%',
          social_security_rate: '6.2% (for income below $132,900)',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('bingo_game_infos', null, {});
  }
};
