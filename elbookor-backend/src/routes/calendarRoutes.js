const express = require('express');
const { getAvailability, updateAvailability } = require('../controllers/calendarController');

const router = express.Router();

router.get('/availability', getAvailability);
router.post('/availability', updateAvailability);

module.exports = router;