const { DataTypes } = require("sequelize");
const { sequelize } = require("../../dbConnect");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
  },
);

module.exports = { User };
