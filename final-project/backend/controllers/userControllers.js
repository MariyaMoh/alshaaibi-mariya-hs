const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const user = require('../models/userModels');
const { ReadableStreamBYOBRequest } = require('stream/web');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('please add all fields');
  }
  
  //check if user exist
  const userExists = await user.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('user alredy exists');
  } //hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await user.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: email.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid user data');
  }
});

//POST/api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check email
  const user = await user.findOne({ email });

  if (user && (await bcrypt.compare(password.user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: email.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid credentials');
  }
});

//GET/api/users/me;
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await user.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});
//generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};