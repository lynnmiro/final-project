var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var User = require('../models/user')

//Get registration page from index button//
router.get('/register', function(req, res, next) {
    console.log('got heree!!!! get route', req.body)
    res.render('register');
});

//Post user data to database POST /register //
router.post('/register', function(req, res, next) {
    console.log('got heree!!!! post route', req.body)
    var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  var newuser =  new User();
  newuser.name = name;
  newuser.username = username;
  newuser.email = email;
  newuser.password = password;
  console.log('new userrr', newuser)
  newuser.save(function(err, savedUser) {
      if(err) {
          console.log(err);
          return res.status(500).send({error: err});
      }
      return res.redirect('/')
  })
})

module.exports = router;