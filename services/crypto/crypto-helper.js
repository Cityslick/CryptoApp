global.fetch = require('node-fetch');
require('isomorphic-fetch');
const cc = require('cryptocompare');
const st = require('stocktwits');
require('dotenv').config();
const Coin = require('../../models/crypto')


function getPrices(req, res, next) {
    console.log('prices');
    cc.priceFull(['BTC', 'BCH', 'ETH', 'LTC', 'XEM', 'XRP', 'DASH', 'ZEC', 'DGB'], ['USD'])
    .then(prices => {
        res.locals.prices = prices;
        return next();
    }).catch((err) => {
        console.log(err);
        return next(err);
    });
};      

// function getNews(req, res, next) {
//     fetch('http://www.faroo.com/api?q=bitcoin&start=1&l=en&f=json&key=f98fb0a0ce69473d9c7e73599535d43b')
//         .then(news => {
//             console.log(res.news);
//             next();
//         }).catch((err) => {
//             console.log(err);
//             next(err);
//         });
// }

function getCoinFromDB(req, res, next) {
    Coin.findById(req.params.id)
        .then(coin => {
            res.locals.coin = coin;
            return next();
        }).catch((err) => {
            console.log(err);
            return next(err);
        });
};

function getTweets(req, res, next) {
    Coin.findById(req.params.id)
        .then(coin => {
            return fetch(`https://api.stocktwits.com/api/2/streams/symbol/${coin.handle}.json`);
        }).then(fetchRes => fetchRes.json()).then(jsonRes => {
            res.locals.tweets = jsonRes;
            console.log(jsonRes);
            return next();
        }).catch((err) => {
            console.log(err);
            return next(err);
        });
}



module.exports = {
    getPrices,
    // getNews,
    getCoinFromDB,
    getTweets,

}

