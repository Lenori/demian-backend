'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('budget_game_links_options', 'allowFrequency', 'allow_frequency');
  },

  down: (queryInterface, Sequelize) => {

  }
};
