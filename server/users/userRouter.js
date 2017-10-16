'use strict';
const router = require('express').Router();
const passport = require('passport');

let userController = require('./userController.js');

router.get('/auth/facebook', passport.authenticate('facebook', {
    session: false,
    scope: 'email'
}), userController.facebook);

router.get('/auth/facebook/callback',
 passport.authenticate('facebook', {failureRedirect: '/#/'}), userController.facebookCallBack);

router.get('/auth/google', passport.authenticate('google', {
    session: false,
    scope: ['email']
}), userController.google);

router.get('/auth/google/callback',
 passport.authenticate('google', {failureRedirect: '/#/'}), userController.googleCallBack);

module.exports = router;
