'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('links', [
        {
          slug: 'home_youtube',
          link: 'https://www.youtube.com/watch?v=uxc7mMHp4Ts',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          slug: 'tabela_horarios',
          link: 'horarios.pdf',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('links', null, {});
  }
};
