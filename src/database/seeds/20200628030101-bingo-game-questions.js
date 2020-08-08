'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from bingo_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('bingo_game_questions', [
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$63,000',
          question: `What´s your medicare tax?`,
          answer: '913.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$73,000',
          question: `What´s your state and local tax?`,
          answer: '5292.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$220,000',
          question: `What´s your social security tax?`,
          answer: '13640',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$79,000',
          question: `What´s your state and local tax?`,
          answer: '5727.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$75,000',
          question: `What´s your medicare tax?`,
          answer: '1087.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$85,000',
          question: `What´s your state and local tax?`,
          answer: '6162.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$53,000',
          question: `What´s your social security tax?`,
          answer: '3286',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$51,000',
          question: `What´s your medicare tax?`,
          answer: '739.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$81,000',
          question: `What´s your state and local tax?`,
          answer: '5872.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'California',
          value: '$72,000',
          question: `What´s your social security tax?`,
          answer: '4464',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$120,000',
          question: `What´s your medicare tax?`,
          answer: '1740',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$117,000',
          question: `What´s your state and local tax?`,
          answer: '10,319.40',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$131,000',
          question: `What´s your medicare tax?`,
          answer: '1899.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$77,000',
          question: `What´s your social security tax?`,
          answer: '4774',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$73,000',
          question: `What´s your state and local tax?`,
          answer: '6438.60',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$88,000',
          question: `What´s your medicare tax?`,
          answer: '1276',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$90,000',
          question: `What´s your social security tax?`,
          answer: '5580',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$91,000',
          question: `What´s your state and local tax?`,
          answer: '8026.20',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$83,000',
          question: `What´s your medicare tax?`,
          answer: '1203.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'New York',
          value: '$101,000',
          question: `What´s your social security tax?`,
          answer: '6262',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$52,000',
          question: `What´s your medicare tax?`,
          answer: '754',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$57,000',
          question: `What´s your state and local tax?`,
          answer: '3192',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$83,000',
          question: `What´s your social security tax?`,
          answer: '5146',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$40,000',
          question: `What´s your state and local tax?`,
          answer: '2240',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$33,000',
          question: `What´s your social security tax?`,
          answer: '2046',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$67,000',
          question: `What´s your medicare tax?`,
          answer: '971.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$81,000',
          question: `What´s your state and local tax?`,
          answer: '4536',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$45,000',
          question: `What´s your state and local tax?`,
          answer: '2520',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Arizona',
          value: '$73,000',
          question: `What´s your medicare tax?`,
          answer: '1058.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$43,000',
          question: `What´s your medicare tax?`,
          answer: '623.50',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$45,000',
          question: `What´s your state and local tax?`,
          answer: '2925',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$92,000',
          question: `What´s your social security tax?`,
          answer: '1334',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$47,000',
          question: `What´s your state and local tax?`,
          answer: '3055',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$78,000',
          question: `What´s your medicare tax?`,
          answer: '1131',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$41,000',
          question: `What´s your state and local tax?`,
          answer: '2665',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$63,000',
          question: `What´s your social security tax?`,
          answer: '3906',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$42,000',
          question: `What´s your medicare tax?`,
          answer: '609',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$71,000',
          question: `What´s your state and local tax?`,
          answer: '4615',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          state: 'Washington',
          value: '$35,000',
          question: `What´s your social security tax?`,
          answer: '2170',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('bingo_game_questions', null, {});
  }
};
