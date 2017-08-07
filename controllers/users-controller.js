const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
    console.log('index in users controller running');
    res.render('crypto/user', {
        currentPage: 'Profile',
        user: req.user,
    });
};

usersController.showTracked = (req, res, next) => {
    console.log('showfollowed method running;');
    User.showFollowed(req.user.id).then(followed => {
        console.log(followed);
        res.locals.tracked = followed;
        return next();
    }).catch((err) => {
        console.log(err);
        return next(err);
    });
}


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