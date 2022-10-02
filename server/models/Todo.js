const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    deadline: {
      type: Number,
      required: true,
    },
    repeat: {
        type: Boolean,
        required: true,
    },
    repeatTime: {
        type: Number,
    }
  },
  {
  timestamps: true,
  });

  const Todo = model('Todo', todoSchema);
  
  module.exports = Todo;