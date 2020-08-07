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
          name: 'Main Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Church Street',
          type: 'property',
          price: 280,
          rent: 70,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Main Street North',
          type: 'property',
          price: 230,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Main Street South',
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
          name: 'Elm Street',
          type: 'property',
          price: 150,
          rent: 20,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Main Street West',
          type: 'property',
          price: 220,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Main Street East',
          type: 'property',
          price: 400,
          rent: 100,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Park Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: '2nd Street',
          type: 'property',
          price: 230,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Walnut Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Chestnut Street',
          type: 'property',
          price: 270,
          rent: 70,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Maple Avenue',
          type: 'property',
          price: 230,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Maple Street',
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
          name: 'Broad Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Oak Street',
          type: 'property',
          price: 220,
          rent: 20,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Center Street',
          type: 'property',
          price: 400,
          rent: 100,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Pine Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'River Road',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Market Street',
          type: 'property',
          price: 240,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Water Street',
          type: 'property',
          price: 370,
          rent: 80,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Union Street',
          type: 'property',
          price: 290,
          rent: 90,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'South Street',
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
          name: 'Park Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: '3rd Street',
          type: 'property',
          price: 230,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Washington Avenue',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Cherry Street',
          type: 'property',
          price: 260,
          rent: 60,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'North Street',
          type: 'property',
          price: 210,
          rent: 30,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: '4th Street',
          type: 'property',
          price: 240,
          rent: 40,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Court Street',
          type: 'property',
          price: 400,
          rent: 100,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Highland Avenue',
          type: 'property',
          price: 350,
          rent: 80,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Mill Street',
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
          name: 'Franklin Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Prospect Street',
          type: 'property',
          price: 210,
          rent: 20,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'School Street',
          type: 'property',
          price: 250,
          rent: 50,
          text: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          game_id: gameRows[0].id,
          name: 'Spring Street',
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
