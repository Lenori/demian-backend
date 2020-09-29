'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('orders', 'paymentMethod', 'payment_method');
  }
};
