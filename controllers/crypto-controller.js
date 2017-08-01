const Crypto = require('../models/crypto');

const cryptoController = {};

cryptoController.index = (req, res) => {
    res.render('crypto/dashboard')
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = cryptoController;