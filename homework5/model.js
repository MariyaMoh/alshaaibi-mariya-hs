const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employee = new Schema({
  id: Number,
  FirstName: String,
  LastName: String,
  email: String,
});
const model = mongoose.model('employees', employee);
module.exports = model;
