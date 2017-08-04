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
    console.log('controller');
    res.render('crypto/coin-single', {
        message: 'ok',
        coin: res.locals.coin,
        data: res.locals.tweets,
    })
}

// liveCryptoController.show = (req, res, next) => {
//         Coin.findById(req.params.id)
//         .then(coin => {
//             return fetch(`https://api.stocktwits.com/api/2/streams/symbol/${coin.handle}.json`);
//         }).then(fetchRes => {
//             return fetchRes.json();
//         }).then(render => {
//             res.render('crypto/coin-single', {
//                 message: 'ok',
//                 tweet: render,
//             });
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// }


// liveCryptoController.view = (req, res) => {
//     Coin.findById(req.params.id)
//         .then(coinage => {
//             console.log(coinage);
//             res.render('crypto/coin-single', {
//                 currentPage: 'show',
//                 message: 'ok',
//                 data: coinage,
//             });
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// }

module.exports = liveCryptoController;