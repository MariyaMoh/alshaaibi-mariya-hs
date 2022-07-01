const express = require('express');
const router = express.Router();
const {
  getEmp,
  setEmp,
  updateEmp,
  deleteEmp,
} = require('../controllers/empControllers');

router.route('/').get(getEmp).post(setEmp);

router.route('/:id').delete(deleteEmp).put(updateEmp);
// router.get('/', ( getEmp));

// router.post('/', (setEmp));

// router.put('/:id', (updateEmp));

// router.delete('/:id', (deleteEmp));

module.exports = router;
