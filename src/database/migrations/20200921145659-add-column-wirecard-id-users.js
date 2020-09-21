'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'wirecard_id', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'wirecard_id');
  }
};
