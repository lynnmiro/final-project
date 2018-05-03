var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var User = require('../models/users')

//Get registration page from index button//
router.get('/register', function(req, res, next) {
  res.render('register');
    if (err) return console.error(err);
    res.json(user);
});

//Post user data to database POST /register //
router.post('/register', function(req, res, next) {
   res.render('Welcome to Fit 7');
})
//    var username = req.body.username;
//    var email = req.body.email;
//    var password = req.body.password;

//    var newuser =  new User();
//    newuser.username = username;
//    newuser.email = email;
//    newuser.password = password;
//    newuser.save(function(err, savedUser) {
//        if(err) {
//            console.log(err);
//            return res.status(500).send();
//        }
        return res.status(200).send();
     


    module.exports = router;
