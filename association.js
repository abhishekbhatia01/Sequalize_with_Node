const { anotherUser } = require("./src/models/anotherUser");
const { userProfile } = require("./src/models/userProfile");


anotherUser.hasOne(userProfile,{
    foreignKey: 'userId',
    as: 'profile'
})

userProfile.belongsTo(anotherUser, {
    foreignKey: 'userId',
    as: 'userInfo'
})