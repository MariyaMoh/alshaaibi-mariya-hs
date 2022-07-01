const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const user = require('../models/userModels');

const protect = asyncHandler(async (re, res, next) => {
  let token;

  if (
    req.header.authorization &&
    req.header.authorization.staetsWith('Bearer')
  ) {
    try {
      token = req.header.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.jwt_SECRET);
      eeq.user = await user.findById(decoded.id).select('-password');

      next()
    } catch (error) {

        console.log(error)
        res.statusCode(401)
        throw new Error('not authrized')
    }
  }
  if(!token){
     res.statusCode(401);
     throw new Error('not authrized, no token');

  }
});

module.exports = { protect };
