'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user_game.belongsTo(models.user_game_biodata, {
        foreignKey: "user_game_biodata_id"
      });
      models.user_game.belongsTo(models.user_game_history, {
        foreignKey: "user_game_history_id"
      });
    }
  }
  user_game.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game',
  });
  return user_game;
};