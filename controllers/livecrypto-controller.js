
const liveCryptoController = {};

liveCryptoController.index = (req, res) => {
    res.render('crypto/dashboard', {
        currentPage: 'dashboard',
        prices: res.prices,
        tweets: res.body,
        news: res.news,
    });
};

module.exports = liveCryptoController;