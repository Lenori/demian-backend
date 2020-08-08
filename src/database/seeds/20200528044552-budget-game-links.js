'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const game = await queryInterface.sequelize.query(
        `SELECT id from budget_game;`
      );

      const gameRows = game[0];

      await queryInterface.bulkInsert('budget_game_links', [
        {
        name: 'Housing',
        multiple: false,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        name: 'Phone/Internet/Cable',
        multiple: true,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        name: 'Food',
        multiple: false,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        name: 'Insurance',
        multiple: true,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        name: 'Transportation',
        multiple: false,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        name: 'Entertainment',
        multiple: true,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        },
        {
        name: 'Clothes',
        multiple: false,
        game_id: gameRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
        }
    ], {});    

    const links = await queryInterface.sequelize.query(
      `SELECT id from budget_game_links;`
    );

    const linksRows = links[0];

    return queryInterface.bulkInsert('budget_game_links_options', [
      {
      link_id: linksRows[0].id,
      name: 'Rent a house',
      cost: 1350,
      description: 'Nice area, but further out from things.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[0].id,
      name: 'Rent apartment A',
      cost: 1375,
      description: 'Nice area, beautiful views and walking distance from all stores.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[0].id,
      name: 'Rent apartment B',
      cost: 1075,
      description: 'Somewhat nice area, not so great views and a little further away from stores.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[0].id,
      name: 'Rent apartment C',
      cost: 875,
      description: 'Bad area and bad views. Stores available but not the best options.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[1].id,
      name: 'Phone',
      cost: 50,
      description: null,
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[1].id,
      name: 'Internet',
      cost: 75,
      description: null,
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[1].id,
      name: 'Cable',
      cost: 40,
      description: null,
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[1].id,
      name: 'Bundle',
      cost: 100,
      description: 'Internet + Phone',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[2].id,
      name: 'Plan a week of eating',
      cost: 8,
      description: 'Value per meal.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[2].id,
      name: 'Fast food',
      cost: 7,
      description: 'Value per meal. Cheap, tastes good and very unhealthy.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[2].id,
      name: 'Eating out healthier options',
      cost: 12,
      description: 'Value per meal. A little expensive, tastes great and healthier than fast food.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[2].id,
      name: 'Grocery shopping',
      cost: 360,
      description: '3 meals a day, 30 days a month. Cheapest option, but you have to cook.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[3].id,
      name: 'Health',
      cost: 120,
      description: null,
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[3].id,
      name: 'Dental',
      cost: 30,
      description: null,
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[3].id,
      name: 'Life',
      cost: 60,
      description: null,
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[3].id,
      name: 'None',
      cost: 0,
      description: null,
      allow_frequency: false,
      warning: 'Cost can grow exponentially higher if you don’t have any insurance and can set you back years financially.',
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[4].id,
      name: 'Car A',
      cost: 700,
      description: 'New car.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[4].id,
      name: 'Car B',
      cost: 575,
      description: 'Used car.',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[4].id,
      name: 'Public transportation',
      cost: 120,
      description: 'Monthly pass',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[4].id,
      name: 'Uber/Lyft',
      cost: 12,
      description: 'Value per ride.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Netflix',
      cost: 17,
      description: 'Monthly subscription',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Hulu',
      cost: 10,
      description: 'Monthly subscription',
      warning: null,
      allow_frequency: false,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Going out with friends',
      cost: 60,
      description: 'Value per night. Drinks and dinner.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Videogames',
      cost: 60,
      description: 'Value per game',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Movies',
      cost: 27,
      description: 'Value per movie. Ticket, popcorn and drinks.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Concert',
      cost: 80,
      description: 'Value per concert.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Comedy show',
      cost: 30,
      description: 'Value per show.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[5].id,
      name: 'Comedy show',
      cost: 30,
      description: 'Value per show.',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[6].id,
      name: 'Higher end',
      cost: 80,
      description: 'Shirt, dress or jeans',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[6].id,
      name: 'Middle ground',
      cost: 50,
      description: 'Shirt, dress or jeans',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      },
      {
      link_id: linksRows[6].id,
      name: 'Low end',
      cost: 30,
      description: 'Shirt, dress or jeans',
      warning: null,
      allow_frequency: true,
      created_at: new Date(),
      updated_at: new Date()
      }
      ], {});

  },

  down: async (queryInterface, Sequelize) => {    
      await queryInterface.bulkDelete('budget_game_links', null, {});
      return queryInterface.bulkDelete('budget_game_links_options', null, {});
  }
};
