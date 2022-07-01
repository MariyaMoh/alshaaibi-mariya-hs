const asyncHandler = require('express-async-handler');
const { findById } = require('../models/empModels');
const emp = require('../models/empModels')
// get emp(s) route= GET/api/emp
const getEmp = asyncHandler(async (req, res) => {

    const emp= await emp.find()
  res.status(201).json(emp);
});

// set emp(s) route= POST/api/emp
const setEmp = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
const emp = await emp.create({
    text: req.body.text
})
  res.status(201).json(emp);
});

// update emp(s) route= PUT/api/emp:id
const updateEmp = asyncHandler(async (req, res) => {
    const emp = await emp.findById(req.params.id)
    if(!emp){
        res.status(400)
        throw new Error('employee not found')
    }
    const updatedemp= await emp.findById(req.params.id, req.body, {new: true})
  res.status(201).json(updatedemp);
});

// delete emp(s) route= DELETE/api/emp:id
const deleteEmp = asyncHandler(async (req, res) => {
 const emp = await emp.findById(req.params.id);
 if (!emp) {
   res.status(400);
   throw new Error('employee not found');
 }
await emp.remoe()
  res.status(201).json({id: req.params.id});
});

module.exports = {
  getEmp,
  setEmp,
  updateEmp,
  deleteEmp,
};
