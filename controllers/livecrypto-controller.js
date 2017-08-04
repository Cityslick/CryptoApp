const Coin = require('../models/crypto');
require('isomorphic-fetch');
require('dotenv').config();
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
    Coin.findByHandle(req.params.handle)
        .then(coin => {
            return fetch('https://api.stocktwits.com/api/2/streams/symbol/${coin}.json');
        }).then(coin2 => {
            res.render('crypto/coin-single', {
                currentPage: 'show',
                tweets: coin,
                data: coin2,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}


// liveCryptoController.show = (req, res) => {
//     Coin.findById(req.params.id)
//         .then(coin => {
//             res.render('crypto/coin-single', {
//                 currentPage: 'show',
//                 message: 'ok',
//                 data: coin,
//             });
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// }

module.exports = liveCryptoController;