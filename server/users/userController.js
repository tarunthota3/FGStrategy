'use strict';
const logger = require('./../../applogger');

const User = require('./userEntity');
const UserProfile = require('./userProfileEntity').userModel;
const nodemailer = require('nodemailer');
let driver = require('../config/neo4j');
let session = driver.session();
var rand,
    mailOptions,
    host,
    link,
    VIDcheck;

let userCtrl = {
    facebook: function(req, res) {
        console.log("inside facebook usercontroller",req.user);
        res.json(req.user);
    },

    facebookCallBack: function(req, res) {
        res.cookie('authType', req.user.authType);
        res.cookie('username', req.user.name);
        res.cookie('profilepicture', req.user.photos);
        res.cookie('email', req.user.email);
        res.redirect('/#/home');
    },

    google: function(req, res) {
        res.json(req.user);
    },

    googleCallBack: function(req, res) {
        let user = new User();
        res.cookie('token', req.user.token);
        res.cookie('username', req.user.name);
        res.cookie('authType', req.user.authType);
        res.cookie('profilepicture', req.user.photos);
        res.cookie('email', req.user.email);
        res.redirect('/#/home');
    },
}
module.exports = userCtrl;
