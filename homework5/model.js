const { appendFile } = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const app = express();
mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.t5gmlo4.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('database connection sucessfuly'))
  .catch(() => console.log('database connection error'));

let employee = new Schema({
  id: Number,
  FirstName: String,
  LastName: String,
  email: String,
});
const model = mongoose.model('employee', employee);
module.exports = model;

app.listen(3000, () => console.log('listening omn port 3000'));
