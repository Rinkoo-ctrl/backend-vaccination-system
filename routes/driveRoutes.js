const express = require('express');
const router = express.Router();
const { createDrive, getUpcomingDrives } = require('../controllers/driveController');

router.post('/', createDrive);
router.get('/upcoming', getUpcomingDrives);

module.exports = router;
