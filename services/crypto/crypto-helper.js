global.fetch = require('node-fetch');
const cc = require('cryptocompare');
require('dotenv').config();


function getPrices(req, res, next) {
        cc.priceFull('BTC', ['USD'])
        .then(prices => {
            console.log(prices);
            res.prices = prices;
            return next();
        }).catch((err) => {
            console.log(err);
            next(err);
        });
}         

module.exports = {
    getPrices
}

