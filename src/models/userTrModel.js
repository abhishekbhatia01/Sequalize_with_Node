const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const userTrModel = sequelize.define("UserTr", 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

module.exports = { userTrModel };
