var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var Workout = require('../models/workout')

router.get('/', function(req, res, next) {
  Workout.find(function (err, workouts) {
    if (err) return console.error(err);
    res.json(workouts);
  })  
});

router.post('/', function(req, res, next) {
  res.send("todo");
});

router.get('/:id', function(req, res, next) {
  res.send(req.params["id"])
});

router.put('/:id', function(req, res, next) {
  res.send(req.params["id"])
});

router.delete('/:id', function(req, res, next) {
  res.send(req.params["id"])
});
module.exports = router;
