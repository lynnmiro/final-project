// var createError = require('http-errors');
var express = require('express');
var app = express();

var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
//app.use(express.static('app/public'));
let Workout= require('./models/workout');


var pug = require('pug');

// var indexRouter = require('./routes/index');
var workouts = require('./routes/workouts');
var registerRoute = require("./routes/register");

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', registerRoute)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static(__dirname + '/static'));


// app.use(cookieParser());


// app.use('/', indexRouter);
app.use('/api/workouts', workouts);

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/register', function (req, res) {
  res.render('register')  
});

app.get('/home', function (req, res) {
  res.render('home');
});

app.get('/home/:name', function (req, res) {
  res.render('home', {username: req.params.name});
});

app.get('/workouts/new', function (req, res) {
  res.render('workoutform');
});

app.post('/workouts/new', function(req, res, next) {
  let workoutToCreate = new Workout(req.body);
  workoutToCreate.save(function(err, workout){
    res.redirect('/workouts/' + workout.id);
  });
});

app.get('/workouts/:id', function (req, res) {
  let id = req.params["id"]
  Workout.findOne({_id: id}, function(err, workout) {
    res.render('workoutadd');
  });
});

// router.get('/:id', function(req, res, next) {
//   Workout.findOne({_id: req.params["id"]}, function(err, workout){
//     if (err) return next(err);
//     res.send(workout);
//   });
// });
// app.get('/workouts/:id', function (req, res) {
//   workout.findOne({_id: req.params["id"]}, function(err, workout) {
//     if (err) return next(err);
//     res.render('workoutadd');
//   });
// });

app.post('/workouts/:id/delete', function (req, res) {
  let id = req.params["id"]
  workout.deleteOne({_id: id}, function(err, workout) {
    res.redirect('/');
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);});

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
