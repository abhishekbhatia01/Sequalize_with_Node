const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const contactModel = sequelize.define(
  "ContactModel",
  {
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model: "UserTr",
            key: "id",
        }
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
)

module.exports = { contactModel };