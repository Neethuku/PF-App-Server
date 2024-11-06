const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const projectController = require("../Controllers/projectController")
const jwtMiddleware = require("../MiddleWares/jwtMiddlewares")
const multerConfig = require('../MiddleWares/multerMiddleware')

//route for register
router.post('/register', userController.register);
//login
router.post('/login', userController.login);
//router specific middleware
//add project
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)
//gethomeproject
router.get('/home-projects',projectController.getHomeProjects)
//getallproject
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)
//getuserproject
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)
//editproject
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)
//removeproject
router.delete('/project/remove/:pid',jwtMiddleware,projectController.removeProject)
//updateprofile
router.put('/user/edit', jwtMiddleware, multerConfig.single("profileImage"), userController.editUser);

module.exports = router
