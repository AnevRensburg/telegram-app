const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const createError = require('http-errors');

const mongoose = require('mongoose');
const config = require('./config/database');
const keys = require('./config/keys.js')
const passport = require('passport');
require('./config/passport')(passport);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const telegramRouter = require('./routes/telegram');

const app = express();


// Connect to database
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
});

// Session Middleware
app.use(session({
  secret: keys.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// CORS Middleware
app.use(cors());

// Set Static Folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter);
app.use('/telegram', telegramRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;