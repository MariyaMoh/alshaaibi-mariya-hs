const mongoose=require('mongoose');

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.t5gmlo4.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('database connection sucessfuly'))
  .catch(() => console.log('database connection error'));