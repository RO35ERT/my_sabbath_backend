'use strict';
const { Model } = require('sequelize');
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
      tableName: 'announcements', // Optional if table name differs
    }
  );
  return Announcement;
};
