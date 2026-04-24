const { where } = require("sequelize");
const { sequelize } = require("../../dbConnect");
const { User } = require("../models/users");

const insert = async (req, res) => {
  let { firstName, lastName } = req.body;

  const data = await User.create({
    firstName: firstName,
    lastName: lastName,
  });

  data.firstName = "hiee";

  await data.save({ fields: ["firstName"] });

  res.status(200).json({
    message: "User created successfully",
    firstName,
    lastName,
  });
};

const fetch = async (req, res) => {
  const data = await User.findAll({
    //     attributes: [
    //       [
    //         sequelize.fn(
    //           "CONCAT",
    //           sequelize.col("firstName"),
    //           " ",
    //           sequelize.col("lastName")
    //         ),
    //         "FullName"
    //       ]
    //     ],
    //

    // attributes: [
    //     [sequelize.fn("SUM", sequelize.col("id")), "TotalUsers"],
    // ]

    // attributes: {
    //     exclude: ["firstName"]
    // }

    where: {
      id: [3, 1],
    },
  });

  res.status(200).json({
    message: "User fetched successfully",
    data,
  });
};

const update = async (req, res) => {
  const data = await User.update(
    {
      firstName: "UpdatedName",
    },
    {
      where: {
        id: 2,
      },
    },
  );
};

module.exports = {
  insert,
  fetch,
};
