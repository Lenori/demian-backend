'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from bill_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('bill_game_bills', [
        {
          game_id: gameRows[0].id,
          name: 'Rent payment',
          value: 1300,
          score_increase: 1,
          score_decrease: 100,
          score_decrease_message: 'It will be harder to get another rent or home loan.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Car payment',
          value: 450,
          score_increase: 0,
          score_decrease: 50,
          score_decrease_message: 'It will be harder to get another car loan.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Car insurance payment',
          value: 450,
          score_increase: 0,
          score_decrease: 40,
          score_decrease_message: 'It will be harder to get car insurance.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Electricity payment',
          value: 180,
          score_increase: 0,
          score_decrease: 30,
          score_decrease_message: 'Security deposit next time you use a utility company will go up.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Gas payment',
          value: 60,
          score_increase: 0,
          score_decrease: 30,
          score_decrease_message: 'Security deposit next time you use a utility company will go up.',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Water payment',
          value: 50,
          score_increase: 0,
          score_decrease: 30,
          score_decrease_message: 'Security deposit next time you use a utility company will go up.',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('bill_game_bills', null, {});
  }
};
