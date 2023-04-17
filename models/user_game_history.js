'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user_game_history.hasOne(models.user_game, {
        foreignKey: "user_game_history_id"
      })
    }
  }
  user_game_history.init({
    level_game: DataTypes.STRING,
    jumlah_main: DataTypes.INTEGER,
    jumlah_menang: DataTypes.INTEGER,
    jumlah_kalah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};