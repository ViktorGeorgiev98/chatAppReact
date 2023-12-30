const userModel = require('../database/User');
const bcrypt = require('bcrypt')
const { SECRET } = require('../constants/constants');

userModel.createNewUser = async (displayName, email, password, imageUrl) => {
    return await userModel.create({displayName, email, password, imageUrl});
}

userModel.getAllUsers = async () => {
    return await userModel.find();
}

userModel.findUserByEmail = async (email) => {
    return await userModel.findOne({email: email});
}

userModel.login = async (email, password) => {
    const user = await userModel.findUserByEmail(email);

    if (!user) {
        throw new Error("Username with this email does not exist!");
    }

    const passwordIsValid = await bcrypt.compare(user.password, password);
    
    if (!passwordIsValid) {
        throw new Error("Password is not correct!");
    }
    const payload = {
        _id: user._id,
        username: user.email
     }
     const token = await jwt.sign(payload, SECRET, {expiresIn: "3d"});
     return token;
}

module.exports = userModel;