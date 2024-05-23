const express = require('express');
const router = express.Router();
const save = require('../models/save');
const { Telegraf } = require('telegraf');
const keys = require('../config/keys');

router.get('/', function(req, res, next) {
    res.send('hi, this is the telegram route');
  });

// Store the message in the database
// router.post("/", async function(req, res, next) {
//     res.send({success:true, msg: 'Message contents viewed'});
//     console.log('Message contents: ', req);
//     // let newMessageObject = new save.Message({
//     //   message: req.body.message,
//     //   username: 'Bot',
//     //   time: new Date()
//     // });
//     // await save.saveMessage(newMessageObject);
//     // console.log('saveMessage returned');
//     // res.send({success:true, msg: 'Message stored successfully'});
//     // console.log('Message stored successfully');
// });

router.post('/', function(req, res, next) {
    // res.send({success:true, msg: 'Message contents viewed'});
    // console.log('Message Received')
    res.sendStatus(200);
});


// bot.launch();

module.exports = router;