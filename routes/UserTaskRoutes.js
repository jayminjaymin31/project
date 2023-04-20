const express = require('express');
const router = express.Router();
const userTaskController = require('../controller/UserTaskController');



router.post('/usertask',userTaskController.addUserTask);
router.get('/usertask',userTaskController.getAllUserTask);
router.get('/usertask2/:id',userTaskController.getUserTeamByUserId);
router.get('/usertask/:id',userTaskController.getUserTaskById);
router.delete('/usertask/:id',userTaskController.deleteUserTask);
router.put('/usertask/:id',userTaskController.updateUserTask);


module.exports = router