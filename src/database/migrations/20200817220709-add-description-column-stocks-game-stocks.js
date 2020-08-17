'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('stocks_game_stocks', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('stocks_game_stocks', 'description');
  }
};
