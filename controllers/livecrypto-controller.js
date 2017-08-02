
const liveCryptoController = {};

liveCryptoController.index = (req, res) => {
    console.log('inside controller prices = ', res.prices);
    res.render('crypto/dashboard', {
        currentPage: 'dashboard',
        prices: res.prices,
    });
};

module.exports = liveCryptoController;