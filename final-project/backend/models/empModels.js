const { timeStamp } = require('console');
const mongoose = require('mongoose');

const empSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports=mongoose.model('emp',empSchema)
