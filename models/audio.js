'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Audio.init({
    posted_by: DataTypes.STRING,
    title: DataTypes.STRING,
    file_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Audio',
  });
  return Audio;
};