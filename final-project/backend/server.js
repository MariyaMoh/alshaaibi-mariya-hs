const express = require('express');
const colors = require('colors');
const dontenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/emp', require('./routes/empRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));



module.exports = app;