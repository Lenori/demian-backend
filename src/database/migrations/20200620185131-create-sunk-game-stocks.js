'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('sunk_game_stocks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {model: 'sunk_game', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      buy_on_start: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      start_value: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: true
      },
      round_1: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: true
      },
      round_2: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: true
      },
      round_3: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: true
      },
      round_4: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: true
      },
      round_5: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: true
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
    return queryInterface.dropTable('sunk_game_stocks');
  }
};
