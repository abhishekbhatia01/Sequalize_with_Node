const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb1", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected ✅");
  } catch (error) {
    console.log("DB Error ❌", error);
  }
};

module.exports = { sequelize, dbConnection };