const express = require('express');
const router = express.Router();
const projectTeamController = require('../controller/ProjectTeamController');



router.post('/projectteam',projectTeamController.addprojectTeam);
router.get('/projectteam',projectTeamController.getAllProjectTeam);
router.get('/projectteam/:id',projectTeamController.getTeamIdByProject);
router.get('/projectteam1/:id',projectTeamController.getProjectTeamById);
router.delete('/projectteam/:id',projectTeamController.deleteProjectTeam);
router.put('/projectteam/:id',projectTeamController.updateProjectTeam);


module.exports = router