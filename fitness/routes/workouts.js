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
  let workoutToCreate = new Workout(req.body);
  workoutToCreate.save(function(err, workout){
    res.send(workout);
  });
});

router.get('/:id', function(req, res, next) {
  Workout.findOne({_id: req.params["id"]}, function(err, workout){
    if (err) return next(err);
    res.send(workout);
  });
});

router.put('/:id', function(req, res, next) {
  Workout.findOneAndUpdate({_id: req.params["id"]}, req.body, function(err, workout) {
    if (err) return next(err);
    res.status(204).send();
  });
});

router.delete('/:id', function(req, res, next) {
  Workout.deleteOne({_id: req.params["id"]}, function(err, workout) {
    if (err) return next(err);
    res.status(204).send();
  });
});
module.exports = router;
