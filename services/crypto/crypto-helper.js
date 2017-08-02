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


module.exports = {
    getPrices,
    getTweets
}

