const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const courseModel = sequelize.define(
    "Course",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }

);

module.exports = { courseModel };
