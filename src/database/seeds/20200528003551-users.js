'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('users', [{
        name: 'Kaidan Admin',
        email: 'kaidangamesadm@gmail.com',
        password: '$2y$08$ZhwSbBFLuQQd4AH2u1fMW.f2Kx9TUuBXQ29FP8J652L.a9vwT6sVW',
        admin: true,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('users', null, {});
  }
};
