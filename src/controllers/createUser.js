const { anotherUser } = require("../models/anotherUser");
const { userProfile } = require("../models/userProfile");

const createUser = async (req, res) => {
  try {
    const user = await anotherUser.create({ username: req.body.username });

    const profile = await userProfile.create({
      bio: req.body.bio,
      userId: user.id,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await anotherUser.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
        model: userProfile,
        as: "profile",
      },
    });

    res.status(201).json({
      message: "All users",
      users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUser,
};
