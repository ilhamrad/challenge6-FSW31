'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      user_game_biodata_id: {
        type: Sequelize.STRING,
        references: {
          model: "user_game_biodata",
          key: "id"
        }
      },
      user_game_history_id: {
        type: Sequelize.STRING,
        references: {
          model: "user_game_history",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_games');
  }
};