const express = require('express')
const router = express.Router()
const userController= require('../controller/UserController')

router.get('/user',userController.getUserData)
router.post('/user',userController.registerUser)
router.get('/user/:id',userController.getUserById)
router.put('/user/:email',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)
router.post('/user/login',userController.loginUser1)
// router.post('/user/login',userController.loginUser)

module.exports = router;