"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here if needed
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false, // Full name is required
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensures no duplicate emails
        validate: {
          isEmail: true, // Validates email format
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false, // Password is required
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
