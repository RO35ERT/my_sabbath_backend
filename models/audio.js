'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audio extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Audio.init(
    {
      posted_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Audio',
    }
  );
  return Audio;
};
