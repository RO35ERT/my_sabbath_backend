'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    static associate(models) {
    }
  }
  Announcement.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_posted: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,  // Set default value to the current date and time
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM(
          'emergency',
          'banns of marriage',
          'funeral',
          'cares and concerns'
        ),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Announcement',
    }
  );
  return Announcement;
};
