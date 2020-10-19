'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('aulasParticulares', [
        {
          name: '1 vez / semana',
          description: '',
          price: 799,
          link: 'https://evo-totem.w12app.com.br/demianmaia/1/site/uRcgN1BLXvcYzmC%5BBAR%5DZHe3rg%5BEQUAL%5D%5BEQUAL%5D',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: '2 vez / semana',
          description: '',
          price: 1499,
          link: 'https://evo-totem.w12app.com.br/demianmaia/1/site/h%5BBAR%5DKEL8uI95qdrw2eJYudZQ%5BEQUAL%5D%5BEQUAL%5D',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('aulasParticulares', null, {});
  }
};
