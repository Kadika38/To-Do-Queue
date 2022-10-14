const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  repeat: {
      type: Boolean,
      required: true,
  },
  repeatTime: {
      type: Number,
  },
  creation: {
    type: Number,
  }
},
{
timestamps: true,
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: [todoSchema],
},
{
  timestamps: true,
});


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;