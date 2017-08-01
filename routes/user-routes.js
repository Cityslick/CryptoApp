const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRoutes.get('/dashboard', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;

