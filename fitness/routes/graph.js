var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var Graph = require('../models/graph')

router.get('/', function(req, res, next) {
  Graph.find(function (err, graph) {
    if (err) return console.error(err);
    res.json(graph);
  })  
});

router.post('/', function(req, res, next) {
  let graphToCreate = new Graph(req.body);
  graphToCreate.save(function(err, graph){
    res.send(graph);
  });
});


module.exports = router;
