var express = require('express');
const passport = require('passport'); 
var router = express.Router();
const save = require('../models/save');
const { Telegraf } = require('telegraf');

// Bot ID
const bot = new Telegraf('7060166746:AAEnrVyyEseJTixUxpgMNsi89sLVLFxdaOE');
// Channel ID
const channelId = '-1002103448345';
// Function to forward messages to the Telegram channel
async function forwardToTelegram(message) {
    bot.telegram.sendMessage(channelId, message);
}

// Store the message in the database
router.post("/message", passport.authenticate('jwt', {session:false}), async function(req, res, next) {
  let newMessageObject = new save.Message({
    message: req.body.message,
    username: req.body.username,
    time: new Date()
  });
  await save.saveMessage(newMessageObject);
  console.log('saveMessage returned');
  // Forward the message to the Telegram channel
  await forwardToTelegram(req.body.message);
  res.send({success:true, msg: 'Message stored successfully and forwarded to Telegram channel'});
  console.log('Message stored successfully and forwarded to Telegram channel');
});

// Get messages back from the database
router.get("/", async function(req, res, next) {

  let returnedArray = await save.getMessages();
  res.send(returnedArray);
});

// Start your bot
bot.launch();

module.exports = router;
