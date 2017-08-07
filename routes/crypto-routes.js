const express = require('express');
const cryptoRouter = express.Router();
const getCrypto = require('../services/crypto/crypto-helper');
const authHelpers = require('../services/auth/auth-helpers');
const liveCrypto = require('../controllers/livecrypto-controller');
const Users = require('../controllers/users-controller');
const Coins = require('../models/crypto');

cryptoRouter.get('/follow/:id', authHelpers.loginRequired, liveCrypto.follow);
cryptoRouter.get('/', getCrypto.getPrices, liveCrypto.index);



cryptoRouter.get('/:id', getCrypto.getCoinFromDB, getCrypto.getTweets, liveCrypto.show);

module.exports = cryptoRouter;

