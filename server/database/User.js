const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    displayName: {type: String, required: [true, "Display name is required"], minLength: [3, "Display name must be longer than 3 characters"]},
    email: {type: String, required: [true, "Email is required"], minLength: [3, 'Email must be longer than 3 characters!'], unique: [true, "Email must be unique!"]},
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
          validator: function (value) {
            // Password must be at least 3 characters, contain at least one uppercase letter, and at least one number
            return /^(?=.*[A-Z])(?=.*\d).{3,}$/.test(value);
          },
          message:
            'Password must be at least 3 characters and contain at least one uppercase letter and one number',
        },
      },
      imageUrl: {type: String, required: [true, 'Image url is required'],
            validate: {
                validator: function(value) {
                    return /^(http|https):\/\//.test
                },
                message: "Image URL should start with HTTP or HTTPS"
            }}
})

const userModel = new mongoose.model("User", userSchema);

module.exports = User;