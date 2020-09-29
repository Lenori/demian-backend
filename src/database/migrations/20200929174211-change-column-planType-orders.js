'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('orders', 'planType', {
      type: 'INTEGER USING CAST("planType" as INTEGER)',
      allowNull: false
    });
  }
};
