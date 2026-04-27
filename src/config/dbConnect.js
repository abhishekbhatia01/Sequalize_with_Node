const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb1", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool:{
    max: 5, // upto 5 connections 
    min: 2,
    acquire: 30000,
    idle: 10000 
  }
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