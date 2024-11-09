const express = require("express");
const userController = require('../Controllers/userController');
const dishesController = require('../Controllers/dishesController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddleware');
const menuController = require('../Controllers/menuController');


const deliveryInformationController = require('../Controllers/deliveryInformationController');

const router = new express.Router();

// User routes
router.post("/user/register", userController.register);
router.post('/user/login', userController.login);

// Dishes and menu routes
router.post('/dishesmenu/add', jwtMiddleware, multerConfig.fields([{ name: 'menuimage' }, { name: 'dishesImage' }]), dishesController.adddishesmenu);
router.post('/menu/add', jwtMiddleware, multerConfig.single('menuimage'), menuController.menu);
router.get('/dishesmenu/all-dishesmenu', jwtMiddleware, dishesController.getAlldishes);
router.get('/menus/all-menus', jwtMiddleware, menuController.getAllmenus);


// Route to add delivery information
router.post('/addDeliveryInformation', deliveryInformationController.addDeliveryInformation);

module.exports = router;
