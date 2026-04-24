import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Url = sequelize.define("Url", {
  short_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  original_url: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Url;