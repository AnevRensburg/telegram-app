const express = require('express');
const passport = require('passport'); 
const router = express.Router();
const save = require('../models/save');
const { Telegraf } = require('telegraf');
const keys = require('../config/keys');

// Get messages back from the database
router.get("/", async function(req, res, next) {

  let returnedArray = await save.getMessages();
  res.send(returnedArray);
});

// Bot ID
const bot = new Telegraf(keys.botId);
// Channel ID
const channelId = keys.channelId;
// Function to forward messages to the Telegram channel
async function forwardToTelegram(message) {
    bot.telegram.sendMessage(channelId, message);
}

// Store the message in the database
router.post("/message", passport.authenticate('jwt', {session:false}), async function(req, res, next) {
  let newMessageObject = new save.Message({
    message: req.body.message,
    username: req.user.username,
    time: new Date()
  });
  await save.saveMessage(newMessageObject);
  console.log('saveMessage returned');
  // Forward the message to the Telegram channel
  await forwardToTelegram(req.body.message);
  res.send({success:true, msg: 'Message stored successfully and forwarded to Telegram channel'});
  console.log('Message stored successfully and forwarded to Telegram channel');
});

// Start your bot
bot.launch();

module.exports = router;
