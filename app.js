var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var backlogsRouter = require('./routes/backlogs');
var controlBoardsRouter = require('./routes/controlBoards');
var developersRouter = require('./routes/developers');
var productOwnersRouter = require('./routes/productOwners');
var recordsRouter = require('./routes/records');
var releaseBacklogsRouter = require('./routes/releaseBacklogs');
var rolesRouter = require('./routes/roles');
var scrumMastersRouter = require('./routes/scrumMasters');
var socialMediaRouter = require('./routes/socialMedia');
var userStoriesRouter = require('./routes/userStories');

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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/backlogs', backlogsRouter);
app.use('/controlBoards', controlBoardsRouter);
app.use('/developers', developersRouter);
app.use('/productOwners', productOwnersRouter);
app.use('/records', recordsRouter);
app.use('/releaseBacklogs', releaseBacklogsRouter);
app.use('/roles', rolesRouter);
app.use('/scrumMasters', scrumMastersRouter);
app.use('/socialMedia', socialMediaRouter);
app.use('/userStories', userStoriesRouter);


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
