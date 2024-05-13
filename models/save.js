const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

async function saveMessage(newMessageObject){
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
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUserObject.password, salt, function(err, hash){
            if(err){
                console.log(err);
            }
            newUserObject.password = hash;
            newUserObject.save();
        });
    });
}

function getUsers(){
    return User.find().sort({time:-1});
}

function getUserById(id){
    User.findById(id);
}

// Get User by Username
async function getUserByUsername(username){
    console.log('getUserByUsername', username)
    try {
        let user = await User.findOne({username: username});
        console.log(user);
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}

// Compare Password
async function comparePassword(candidatePassword, hash){
    try {
        let isMatch = await bcrypt.compare(candidatePassword, hash);
        return isMatch;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// All Exports
module.exports = {
    //Messages
    Message: Message,
    saveMessage: saveMessage,
    getMessages: getMessages,
    //Users
    User: User,
    saveUser: saveUser,
    getUsers: getUsers,
    getUserById: getUserById,
    getUserByUsername: getUserByUsername,
    comparePassword: comparePassword
}



