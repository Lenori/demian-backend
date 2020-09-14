'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('aulasParticulares', [
        {
          name: '1 vez / semana',
          description: '4 AULAS NO MÊS',
          price: 799,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: '2 vez / semana',
          description: '8 AULAS NO MÊS',
          price: 1499,
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('aulasParticulares', null, {});
  }
};
