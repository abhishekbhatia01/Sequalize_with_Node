const { anotherUser } = require("./src/models/anotherUser");
const { userProfile } = require("./src/models/userProfile");
const { postModel } = require("./src/models/postModel")
const { courseModel } = require("./src/models/courseModel");


// One To One
anotherUser.hasOne(userProfile,{
    foreignKey: 'userId',
    as: 'profile'
})

userProfile.belongsTo(anotherUser, {
    foreignKey: 'userId',
    as: 'userInfo'
})


// One To Many
anotherUser.hasMany(postModel, {
    foreignKey: 'userId',
    as: 'UserPost'
})

postModel.belongsTo(anotherUser,{
    foreignKey: 'userId',
    as: 'user'
})

// Many To Many
anotherUser.belongsToMany(courseModel, {
    foreignKey: 'userId',
    through: 'UserCourse',
    as: 'courses'
});

courseModel.belongsToMany(anotherUser, {
    foreignKey: 'courseId',
    through: 'UserCourse',
    as: 'users'
})