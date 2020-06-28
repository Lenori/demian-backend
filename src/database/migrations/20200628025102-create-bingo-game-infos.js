'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bingo_game_infos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'bingo_game', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      medicare_tax_rate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      local_tax_rate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      social_security_rate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('bingo_game_infos');
  }
};
