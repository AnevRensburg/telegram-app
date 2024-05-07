var express = require('express');
var router = express.Router();
const passport = require('passport');
const save = require('../models/save')

// Store the message in the database
router.post("/message", async function(req, res, next) {

  console.log('req body', req.body);

  let newMessageObject = new save.Message({
    message: req.body.message,
    time: new Date()
  });

  await save.saveMessage(newMessageObject);
  console.log('saveMessage returned');
  res.send({success:true, msg: 'Message stored successfully'});
});

// Get messages back from the database
router.get("/", async function(req, res, next) {

  let returnedArray = await save.getMessages();
  res.send(returnedArray);
});

module.exports = router;
