const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRoutes.get('/user', authHelpers.loginRequired, usersController.showTracked, usersController.index);
userRoutes.delete('dashboard/:id', authHelpers.loginRequired, usersController.delete);

module.exports = userRoutes;

