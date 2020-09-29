'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('orders', 'planID', {      
      type: 'INTEGER USING CAST("planID" as INTEGER)',
      allowNull: false
    });
  }
};
