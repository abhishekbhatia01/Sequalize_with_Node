const { anotherUser } = require("../models/anotherUser");
const { userProfile } = require("../models/userProfile");
const { postModel } = require("../models/postModel");
const { courseModel } = require("../models/courseModel");


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

const createBlog = async (req, res) => {
  try {
    const data = await postModel.create({
      content: req.body.content,
      userId: req.body.userId,
    });

    res.status(201).json({
      message: "Post Created",
      data,
    });
  } catch (error) {
    console.log(error); // full error

    res.status(500).json({
      error: error.errors?.map((e) => e.message) || error.message,
    });
  }
};

const getUserWithPost = async (req, res) => {
  try {
    const users = await anotherUser.findAll({
      include: {
        model: courseModel,
        as: "courses",
        attributes: { exclude: ["createdAt", "updatedAt"] },
      }
    });

    res.status(201).json({
      message: "All users",
      users,
    });
  } catch (error) {
    console.log(error); // full error

    res.status(500).json({
      error: error.errors?.map((e) => e.message) || error.message,
    });
  }
};


const create = async (req, res) => {
  try {
    const user1 = await anotherUser.create({ username: "Abhi" });
    const user2 = await anotherUser.create({ username: "Abhishek" });

    const math = await courseModel.create({ title: "Math" });
    const science = await courseModel.create({ title: "Science" });

    await user1.addCourses([math, science]);
    await user2.addCourse(math);

    return res.status(201).json({
      message: "User created successfully",
      user1,
      user2
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}


const deleteUser = async (req, res) => {
  try {
    await anotherUser.destroy({
      where :{
        id: req.body.id
      }
    });

    return res.status(200).json({
      message: "User deleted successfully"
    })
  } catch (error) {
    
    return res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  createUser,
  getUser,
  createBlog,
  getUserWithPost,
  create,
  deleteUser
};
