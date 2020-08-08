'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('bingo_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('bingo_game', 'description');
  }
};
