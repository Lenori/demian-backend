'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('budget_game_links', 'game_id', {
      type: Sequelize.INTEGER,
      references: {model: 'budget_game', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('budget_game_links', 'game_id');
  }
};
