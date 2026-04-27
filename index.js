const express = require('express');
const { sequelize } = require('./src/config/dbConnect'); // 👈 import sequelize
const userRoutes = require('./src/routes/userRouter.route');
require('./association')
const app = express();

app.use(express.json());
app.use('/users', userRoutes);

// 👇 yahan sync lagao
sequelize.sync({force: false})
  .then(() => {
    console.log("DB synced ✅");

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  })
  .catch(err => {
    console.log("DB error ❌", err);
  });