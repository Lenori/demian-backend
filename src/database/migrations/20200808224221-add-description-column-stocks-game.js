'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('stocks_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('stocks_game', 'description');
  }
};
