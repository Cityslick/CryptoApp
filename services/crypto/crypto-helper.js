global.fetch = require('node-fetch');
require('isomorphic-fetch');
const cc = require('cryptocompare');
const st = require('stocktwits');
require('dotenv').config();
require('../../models/crypto')

const Coin = {};

function getPrices(req, res, next) {
    cc.priceFull(['BTC', 'BCH', 'ETH', 'LTC', 'XEM', 'XRP', 'DASH', 'ZEC', 'DGB'], ['USD'])
    .then(prices => {
        res.prices = prices;
        return next();
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};      



function getNews(req, res, next) {
    fetch('http://www.faroo.com/api?q=bitcoin&start=1&l=en&f=json&key=f98fb0a0ce69473d9c7e73599535d43b')
        .then(news => {
            console.log(res.news);
            return next();
        }).catch((err) => {
            console.log(err);
            next(err);
        });
}

function getCoinFromDB(req, res, next) {
    Coin.findById(req.params.id)
        .then(coin => {
            res.locals.coin = coin;
            return next();
        }).catch((err) => {
            console.log(err);
            next(err);
        });
};

function getTweets(req, res, next) {
    Coin.findByHandle(req.params.id)
        .then(coin => {
            return fetch(`https://api.stocktwits.com/api/2/streams/symbol/${coin.handle}.json`);
        }).then(fetchRes => {
            fetchRes = res.locals.tweets;
            next();
        }).catch((err) => {
            console.log(err);
            next(err);
        });
}



module.exports = {
    getPrices,
    getNews,
    getCoinFromDB,
    getTweets,

}

