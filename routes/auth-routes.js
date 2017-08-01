const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth-helpers');
const userController = require('../controllers/users-controller');

authRouter.get('/', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login', {
        currentPage: 'login',
    });
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register', {
        currentPage: 'register',
    });
});

authRouter.post('/register', userController.create);

authRouter.post('/home', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: 'auth/login',
    failureFlash: true,
    })
);

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = authRouter;
