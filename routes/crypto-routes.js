const express = require('express');
const cryptoRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const cryptoController = require('../controllers/crypto-controller');

cryptoRouter.get('/dashboard', authHelpers.loginRequired, cryptoController.index);


module.exports = cryptoRouter;

