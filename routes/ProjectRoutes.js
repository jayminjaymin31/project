const express = require('express');
const router = express.Router();
const projectController = require('../Controller/ProjectController');



router.post('/project',projectController.addproject);
router.get('/project',projectController.getAllProject);
router.get('/project/:id',projectController.getProjectById);
router.delete('/project/:id',projectController.deleteProject);
router.put('/project/:id',projectController.updateProject);


module.exports = router