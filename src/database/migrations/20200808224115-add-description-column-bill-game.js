'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('bill_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('bill_game', 'description');
  }
};
