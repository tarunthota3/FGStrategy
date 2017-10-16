const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const users = require('../users/userEntity');
const configAuth = require('../config/auth');

passport.serializeUser(function(user, done) {
 done(null, user);
});

passport.deserializeUser(function(id, done) {
users.findById(id, function(err, user) {
 done(err, user);
});
});


passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    passReqToCallback: true
},
function(req, token, refreshToken, profile, done) {
    process.nextTick(function(err) {
      let newUser = {};
      newUser.id = profile.id;
      newUser.email = (profile.emails[0].value || '').toLowerCase();
      newUser.name = profile.displayName.toLowerCase().capitalize();
      newUser.photos = profile.photos[0].value;
      newUser.authType = 'google';
      return done(err,newUser);
    });
}));

let fbStrategy = configAuth.facebookAuth;
    String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){return p1+p2.toUpperCase(); });
      };
 passport.use(new FacebookStrategy(fbStrategy,
    function(token, refreshToken, profile, done) {
        process.nextTick(function(err) {
          let newUser = {};
            newUser.id = profile.id;
            newUser.email = (profile.emails[0].value || '').toLowerCase();
            newUser.name =  profile.displayName.toLowerCase().capitalize();
            newUser.photos =
             'https://graph.facebook.com/' + profile.id + '/picture?width=9999';
            newUser.authType = 'facebook';
          return done(err,newUser);
        });
    }));

module.exports = passport;
