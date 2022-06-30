const express = require('express');
const pug = require('pug');
// const routs = require(express.Router);
const app = express();
app.get('/forms', function (req, res) {
  res.render('form', {
    title: 'Welcome to About us page',
    date: new Date(),
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
