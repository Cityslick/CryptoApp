global.fetch = require('node-fetch');
require('isomorphic-fetch');
const cc = require('cryptocompare');
const st = require('stocktwits');
require('dotenv').config();


function getPrices(req, res, next) {
    cc.priceMulti(['BTC', 'ETH'], ['USD'])
    .then(prices => {
        console.log(prices);
        res.prices = prices;
        return next();
    }).catch((err) => {
        console.log(err);
        next(err);
    });
}         

function getTweets(req, res, next) {
    st.get('streams/symbol/BTC.X', {limit:4},
        function(err, res) {
            console.log(res.body);
            return next();
        });
}


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
    getTweets,
    getNews
}

