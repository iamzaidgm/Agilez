var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const {expressjwt} = require('express-jwt');
const i18n = require('i18n');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var backlogsRouter = require('./routes/backlogs');
var recordsRouter = require('./routes/records');
var userStoriesRouter = require('./routes/userStories');
var skillsRouter = require('./routes/skills');

const JwtKey = config.get("secret.key");

var app = express();

const url = config.get('dbChain');

mongoose.connect(url);

const db = mongoose.connection;
db.on('open', ()=> {
  console.log("Connection OK");
});

db.on('error', ()=> {
  console.log("Connection Failed")
})

i18n.configure({
  locales: ['es','en'],
  cookie: 'language',
  directory: `${__dirname}/locales`
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

//app.use(expressjwt({secret:JwtKey, algorithms:['HS256']}).unless({path:["/login"]}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/backlogs', backlogsRouter);
app.use('/records', recordsRouter);
app.use('/userStories', userStoriesRouter);
app.use('/skills', skillsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
