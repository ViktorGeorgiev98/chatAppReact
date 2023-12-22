const userModel = require('../database/User');

userModel.createNewUser = async (displayName, email, password, imageUrl) => {
    return await userModel.create({displayName, email, password, imageUrl});
}

userModel.getAllUsers = async () => {
    return await userModel.find();
}

userModel.findUserByEmail = async (email) => {
    return await userModel.findOne({email: email});
}

module.exports = userModel;