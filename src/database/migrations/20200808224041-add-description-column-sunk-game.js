'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sunk_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sunk_game', 'description');
  }
};
