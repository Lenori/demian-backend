'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('supply_game', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('supply_game', 'description');
  }
};
