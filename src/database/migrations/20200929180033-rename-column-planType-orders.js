'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('orders', 'planType', 'plan_type');
  }
};
