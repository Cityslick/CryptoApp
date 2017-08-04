const Crypto = require('../models/crypto');

const cryptoController = {};

cryptoController.index = (req, res) => {
    res.render('crypto/dashboard')
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

cryptoController.show (req, res) => {
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

module.exports = cryptoController;