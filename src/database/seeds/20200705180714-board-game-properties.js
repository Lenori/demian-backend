'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from board_game;`
      );

      const gameRows = game[0];
    
      return queryInterface.bulkInsert('board_game_properties', [
        {
          game_id: gameRows[0].id,
          name: 'New Jersey Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'California Avenue',
          type: 'property',
          price: 280,
          rent: 70,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'South Carolina Avenue',
          type: 'property',
          price: 230,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Florida Avenue',
          type: 'property',
          price: 230,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Property Management Co.',
          type: 'management',
          price: 300,
          rent: null,
          text: 'Rent increases by 10%',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Whitechapel Road',
          type: 'property',
          price: 150,
          rent: 20,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Oriental Avenue',
          type: 'property',
          price: 220,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Pall Mall',
          type: 'property',
          price: 400,
          rent: 100,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'New York Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Indiana Avenue',
          type: 'property',
          price: 230,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Oxford Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Park Lane',
          type: 'property',
          price: 270,
          rent: 70,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Boardwalk',
          type: 'property',
          price: 230,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Liverpool Street',
          type: 'property',
          price: 280,
          rent: 70,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Property Management Co.',
          type: 'management',
          price: 300,
          rent: null,
          text: 'Rent increases by 10%',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Atlantic Road',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Chicago Avenue',
          type: 'property',
          price: 220,
          rent: 20,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Twin Pines Mall',
          type: 'property',
          price: 400,
          rent: 100,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Brooklyn Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Toronto Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Queens Street',
          type: 'property',
          price: 240,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Central Park Avenue',
          type: 'property',
          price: 370,
          rent: 80,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Broadway Theater',
          type: 'property',
          price: 290,
          rent: 90,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Beverly Hills',
          type: 'property',
          price: 380,
          rent: 90,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Property Management Co.',
          type: 'management',
          price: 300,
          rent: null,
          text: 'Rent increases by 10%',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Bow Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'King`s Cross Station',
          type: 'property',
          price: 230,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'North Carolina Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'States Avenue',
          type: 'property',
          price: 260,
          rent: 60,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Baltic Avenue',
          type: 'property',
          price: 210,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Arizona Road',
          type: 'property',
          price: 240,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Blue Water Mall',
          type: 'property',
          price: 400,
          rent: 100,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Marvin Gardens',
          type: 'property',
          price: 350,
          rent: 80,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Maryland Street',
          type: 'property',
          price: 270,
          rent: 70,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Property Management Co.',
          type: 'management',
          price: 300,
          rent: null,
          text: 'Rent increases by 10%',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Fleet Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Tennessee Avenue',
          type: 'property',
          price: 210,
          rent: 20,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Illinois Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Virginia Street',
          type: 'property',
          price: 240,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('board_game_properties', null, {});
  }
};
