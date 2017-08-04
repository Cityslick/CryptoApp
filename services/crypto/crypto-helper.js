global.fetch = require('node-fetch');
require('isomorphic-fetch');
const cc = require('cryptocompare');
const st = require('stocktwits');
require('dotenv').config();


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


module.exports = {
    getPrices,
    getNews
}

