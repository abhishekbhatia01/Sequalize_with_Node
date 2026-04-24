const { sequelize } = require("../config/dbConnect");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const rawVal = this.getDataValue("name");
        return rawVal ? "Mr. "+rawVal.toUpperCase() : null;
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.name + " " + this.email;
      } 
    }
  },
  {
    tableName: "newUsers",
  },
);


module.exports = { User };