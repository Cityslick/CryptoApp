const Coin = require('../models/crypto');
const liveCryptoController = {};

liveCryptoController.index = (req, res) => {
    res.render('crypto/dashboard', {
        currentPage: 'dashboard',
        prices: res.prices,
        tweets: res.body,
        news: res.news,
    });
};

liveCryptoController.show = (req, res) => {
    Coin.findById(req.params.id)
        .then(coin => {
            res.render('crypto/coin-single', {
                currentPage: 'show',
                message: 'ok',
                data: coin,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

module.exports = liveCryptoController;