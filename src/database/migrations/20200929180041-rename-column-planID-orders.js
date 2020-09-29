'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('orders', 'planID', 'plan_id');
  }
};
