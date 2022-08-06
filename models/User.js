const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please use a valid email address'],
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