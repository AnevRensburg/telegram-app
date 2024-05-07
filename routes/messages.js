var express = require('express');
var router = express.Router();
const save = require('../models/save');
const { Telegraf } = require('telegraf');

// Bot ID
const bot = new Telegraf('7060166746:AAEnrVyyEseJTixUxpgMNsi89sLVLFxdaOE');
// Channel ID
const channelId = '-1002103448345';
// Function to forward messages to the Telegram channel
function forwardToTelegram(message) {
    bot.telegram.sendMessage(channelId, message);
}

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


  // Forward the message to the Telegram channel
  forwardToTelegram(req.body.message);
});

// Get messages back from the database
router.get("/", async function(req, res, next) {

  let returnedArray = await save.getMessages();
  res.send(returnedArray);
});

// Start your bot
bot.launch();

module.exports = router;
