const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
    if (req.user) return res.redirect('/dashboard');
    return next();
}

function loginRequired(req, res, next) {
    alert('Login required!');
    if (!req.user) return res.redirect('/');
    return next();
}

module.exports = {
    comparePass,
    loginRedirect,
    loginRequired,
}