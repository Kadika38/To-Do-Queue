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

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
  },
);

userSchema.methods.checkPassword = function(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
};

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;