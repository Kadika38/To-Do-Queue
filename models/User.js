const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    /* toJSON: {
      virtuals: true,
    }, */
    id: true,
  }
);

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;