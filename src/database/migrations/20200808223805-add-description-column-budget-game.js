'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('budget_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('budget_game', 'description');
  }
};
