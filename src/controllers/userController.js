const { sequelize } = require("../config/dbConnect");
const { User } = require("../models/userModel");

const insert = async (req, res) => {
    let { name, email, age } = req.body;

    const data = await User.create({
        name: name,
        email: email,
        age: age,
    });

    return res.status(200).json({
        message: "User created successfully",
        name,
        email,
        age,
    });
}

const getById = async (req, res) => {
    const {id} = req.body;
    const data = await User.findByPk(id);

    return res.status(200).json({
        message: "All users fetched successfully",
        data,
    });
}


module.exports = { 
    insert,
    getById
};