var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var User = require('../models/users')

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
    if (err) return console.error(err);
});

router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    var newuser =  new User();
    newuser.email = email;
    newuser.username = username;
    newuser.password = password;
    newuser.save(function(err, savedUser) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
          return res.status(200).send();
     
    }
})
module.exports = router;
