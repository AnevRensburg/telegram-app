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
    const user = await save.getUserByUsername(username);
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    const isMatch = await save.comparePassword(password, user.password);
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
  } catch (err) { 
    console.error(err);
    res.json({success: false, msg: 'An error occurred while trying to sign in.'});
  }
});

// Get User Profile
router.get("/profile", passport.authenticate('jwt', {session:false}), async function(req, res, next){
  console.log('Trying to get user profile');
  try {
    console.log('Getting user profile');
    console.log('req', req);
    res.json({user: req.user});
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
});

// Get users back from the database
router.get("/", async function(req, res, next) {
  let returnedArray = await save.getUsers();
  res.send(returnedArray);
});

module.exports = router;

