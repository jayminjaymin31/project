const express = require('express');
const router = express.Router();
const taskController = require('../controller/TaskController');



router.post('/task',taskController.addTask);
router.get('/task',taskController.getAllTask);
router.get('/task/:id',taskController.getTaskById);
router.get('/task1/:id',taskController.getTaskIdByProject);
router.delete('/task/:id',taskController.deleteTask);
router.put('/task/:id',taskController.updateTask);


module.exports = router