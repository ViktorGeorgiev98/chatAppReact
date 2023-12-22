const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
                    return /^(http|https):\/\//.test(value)
                },
                message: "Image URL should start with HTTP or HTTPS"
            }}
})

userSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) {
        return next(); // If the password is not modified, move to the next middleware
      }
      this.password = await bcrypt.hash(this.password, 10);
      next(); // Proceed to save the document
    } catch (error) {
      return next(error); // Pass the error to the next middleware
    }
  });

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;