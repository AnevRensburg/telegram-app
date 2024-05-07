var express = require('express');
var router = express.Router();
const save = require('../models/save');

// Store the user in the database
router.post("/user", async function(req, res, next) {
  console.log('req body', req.body);
  let newUserObject = new save.User({
    user: req.body.username,
    password: req.body.password,
    time: new Date()
  });

  await save.saveUser(newUserObject);
  console.log('saveUser returned');
  res.send({success:true, msg: 'User stored successfully'});
});

// Get users back from the database
router.get("/", async function(req, res, next) {

  let returnedArray = await save.getUsers();
  res.send(returnedArray);
});

module.exports = router;

