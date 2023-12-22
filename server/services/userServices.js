const userModel = require('../database/User');


exports.create = async (displayName, email, password, imageUrl) => {
    await userModel.create(displayName, email, password, imageUrl);
}