const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const save = require('../models/save');
const config = require('../config/database');
const passport = require('passport');

function createToken(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload) => {
    console.log(jwt_payload);
    save.getUserById(jwt_payload.user._id)
  }))
}



// All Exports
module.exports = {
    createToken: createToken
}