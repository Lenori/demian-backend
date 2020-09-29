'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('orders', 'paymentID', 'payment_id');
  }
};
