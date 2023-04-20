const express = require('express');
const router = express.Router();
const moduleController = require('../controller/ModuleController');



router.post('/module',moduleController.addModule);
// router.get('/module1/:projectId',moduleController.getProjectIdByModule)
router.get('/module12/:id',moduleController.getModuleIdByProject)
router.get('/module',moduleController.getAllModule);
router.get('/module/:id',moduleController.getModuleById);
router.delete('/module/:id',moduleController.deleteModule);
router.put('/module/:id',moduleController.updateModule);


module.exports = router