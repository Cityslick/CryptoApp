const Coin = require('../models/crypto');
require('isomorphic-fetch');
require('dotenv').config();
const liveCryptoController = {};

liveCryptoController.index = (req, res) => {
    res.render('crypto/dashboard', {
        currentPage: 'dashboard',
        prices: res.prices,
    });
};



liveCryptoController.show = (req, res) => {
    res.render('crypto/coin-single', {
        message: 'ok',
        coin: res.locals.coin,
        data: res.locals.tweets,
    })
}

liveCryptoController.follow = (req, res) => {
    Coin.follow(req.user.id, req.params.id);
}



module.exports = liveCryptoController;