const express = require('express');
const router = express.Router();
const statusController = require('../controller/StatusController');
router.post('/status', statusController.addStatus);
router.get('/status', statusController.getAllStatus);
router.get('/status/:id',statusController.getUserById)
module.exports = router;