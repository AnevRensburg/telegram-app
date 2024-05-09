const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const save = require('../models/save');

// Signup User
router.post("/signup", async function(req, res, next) {
  console.log('req body', req.body);
  let newUserObject = new save.User({
    username: req.body.username,
    password: req.body.password,
    time: new Date()
  });

  await save.saveUser(newUserObject);
  console.log('saveUser returned');
  res.send({success:true, msg: 'User signed up successfully'});
});



// Signin User
router.post("/signin", async function(req, res, next) {
  console.log('Request body', req.body);
  const username = req.body.username;
  const password = req.body.password;

  try {
    // the username gets passed in from the request body
    // the user variable wait to be assigned the result of the getUserByUsername function
    // the getUserByUsername function is an async function that returns a promise
    const user = await save.getUserByUsername(username);
    // if there is no user, return a 404 status and a message
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    // else, compare the password from the request body with the password from the user object
    const isMatch = await save.comparePassword(password, user.password);
    // if password is not a match, return a 401 status and a message
    if(!isMatch){
      return res.json({success: false, msg: 'Wrong Password'});
    }
    // else, create a token with the user object and the secret key
    const token = jwt.sign({username: user.username}, config.secret, {
        expiresIn: 604800 // 1 week
    });

    res.json({
      success: true,
      token: 'JWT ' + token,
      user: {
        id: user._id,
        username: user.username
      }
    });
  // if there is an error, log the error and return a 500 status and a message
  } catch (err) { 
    console.error(err);
    res.status(500).json({success: false, msg: 'An error occurred'});
  }
});

// User Profile
router.get("/profile", passport.authenticate('jwt', {session:false}), function(req, res, next){
  res.json({user: req.user});
});

// Get users back from the database
router.get("/", async function(req, res, next) {
  let returnedArray = await save.getUsers();
  res.send(returnedArray);
});

module.exports = router;

