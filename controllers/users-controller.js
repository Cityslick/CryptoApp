const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
    res.render('crypto/user', {
        currentPage: 'Profile',
        user: req.user,
    });
};

usersController.create = (req, res, next) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        password_digest: hash,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }).then(user => {
        req.login(user, (err) => {
            if(err) return next(err);
            res.redirect('/');
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

module.exports = usersController;