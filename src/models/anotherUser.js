const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const AnotherUser = sequelize.define(
  "AnotherUser",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  },
);

module.exports = { anotherUser: AnotherUser };