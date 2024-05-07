const mongoose = require('mongoose');
const config = require('../config/database');

// Message Data Format
const messageShape = mongoose.Schema ({
    message: {
        type: String
    },
    time: {
        type: Date
    }
});

const Message = mongoose.model('Message', messageShape);

function saveMessage(newMessageObject){
    newMessageObject.save();
}

function getMessages(){
    return Message.find().sort({time:-1});
}

// All Exports
module.exports = {
    Message: Message,
    saveMessage: saveMessage,
    getMessages: getMessages
}



