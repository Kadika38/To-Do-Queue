const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    due: {
      type: Date,
      required: false,
    }
  },
  {
    /* toJSON: {
      virtuals: true,
    }, */
    id: true,
  }
);

//no initialization since its just a subdocument

module.exports = todoSchema;