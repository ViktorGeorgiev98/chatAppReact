const userModel = require('../database/User');

userModel.createNewUser = async (displayName, email, password, imageUrl) => {
    return await userModel.create(displayName, email, password, imageUrl);
}

module.exports = userModel;