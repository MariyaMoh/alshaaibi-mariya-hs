const express = require('express');
const router = express.Router();
const {
  getEmp,
  setEmp,
  updateEmp,
  deleteEmp,
} = require('../controllers/empControllers');
const { protect } = require('../middleware/authmiddleware');
router.route('/').get(protect, getEmp).post(protect, setEmp);

router.route('/:id').delete(protect, deleteEmp).put(protect, updateEmp);
// router.get('/', ( getEmp));

// router.post('/', (setEmp));

// router.put('/:id', (updateEmp));

// router.delete('/:id', (deleteEmp));

module.exports = router;
