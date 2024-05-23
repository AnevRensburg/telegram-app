const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const jwt = require('jsonwebtoken');
const private = require('../private/private');
const save = require('../models/save');

// Register User
router.post("/register", async function(req, res, next) {
  console.log('req body', req.body);

  let newUserObject = new save.User({
    username: req.body.username,
    password: req.body.password,
    time: new Date()
  });

  await save.saveUser(newUserObject);
  console.log('saveUser returned');
  res.send({success:true, msg: 'User registered successfully'});
});


// Log User In
router.post("/login", async function(req, res, next) {
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
    const token = jwt.sign({username: user.username}, private.secret, {
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
    res.json({success: false, msg: 'An error occurred while trying to log in.'});
  }
});

// Get User Profile
router.get("/profile", passport.authenticate('jwt', {session:false}), async function(req, res, next){
  try {
    console.log('User: ', req.user);
    res.json({user: req.user});
  } catch (err) {
    console.error(err);
    res.json({success: false, msg: 'An error occurred while fetching user data.'});
  }
});

// Check if user exists

router.post("/", async function(req, res, next) {
  const username = req.body.username;
  try {
    const user = await save.getUserByUsername(username);
    if(!user){
      return res.json({success: true, msg: 'User does not yet exist'});
    } else {
      return res.json({success: false, msg: 'User already exists'});
    }
  } catch (err) {
    console.error(err);
    res.json({success: false, msg: 'An error occurred while trying to sign up.'});
  }
});

module.exports = router;

