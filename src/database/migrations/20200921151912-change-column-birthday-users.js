'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'birthday', {
      type: Sequelize.DATEONLY,
      allowNull: true
    });
  }
};
