const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const postModel = sequelize.define(
  "postModel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = { postModel };
