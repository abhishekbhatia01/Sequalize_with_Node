const express = require("express");
const bodyParser = require("body-parser");
const { dbConnection, sequelize } = require("../dbConnect");
require("dotenv").config();
const userDetails = require("./models/userDetails");
const userRoutes = require("./routes/user");

const User = require("./models/users");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

const start = async () => {
  await dbConnection(); // connect DB
  await sequelize.sync(); // create table

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
