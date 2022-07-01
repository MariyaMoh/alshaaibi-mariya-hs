const { timeStamp } = require('console');
const mongoose = require('mongoose');

const empSchema = mongoose.Schema(
  {
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
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
