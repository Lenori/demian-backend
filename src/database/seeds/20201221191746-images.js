'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('images', [
        {
          slug: 'home_image',
          url: 'home.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'proposito_image',
          url: 'proposito.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'missao_image',
          url: 'missao.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'quote_image',
          url: 'quote.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'logo_image',
          url: 'logo.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'particulares_image',
          url: 'particulares.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'regulares_image',
          url: 'regulares.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'cadastro_image',
          url: 'cadastro.jpg',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('images', null, {});
  }
};
