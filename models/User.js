const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
  },
);

userSchema.methods.checkPassword = function(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
};

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;