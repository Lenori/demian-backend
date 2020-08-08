'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sunk_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sunk_game', 'description');
  }
};
