const { sequelize } = require("../dbConnect");
const { DataTypes } = require("sequelize");

const userDetails = sequelize.define(
  "userDetails",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = userDetails;