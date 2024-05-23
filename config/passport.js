const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const save = require('../models/save');
const keys = require('./keys');

module.exports = function(passport){
  console.log('passport')
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = keys.secret; 
 
  passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
      console.log('jwt_payload', jwt_payload);
      let user = await save.getUserByUsername(jwt_payload.username);
      user.password = '';
      delete user.password;
      console.log('user', user);
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  }));
}