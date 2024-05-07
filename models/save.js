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


// User Data Format
const userShape = mongoose.Schema ({
    username: {
        type: String
    },
    password: {
        type: String
    },
    time: {
        type: Date
    }
});

const User = mongoose.model('User', userShape);
function saveUser(newUserObject){
    newUserObject.save();
}
function getUsers(){
    return User.find().sort({time:-1});
}

// All Exports
module.exports = {
    Message: Message,
    saveMessage: saveMessage,
    getMessages: getMessages,
    User: User,
    saveUser: saveUser,
    getUsers: getUsers
}



