(function() {
  'use strict';

}());

var express       = require('express');
var users         = express.Router();
var bodyParser    = require('body-parser');
var db            = require('./../db/pg');

users.post('/', db.createUser, function (req, res){
  res.redirect('/');
});

users.get('/new', (req,res)=>{
  res.render('users/newuser.html.ejs');
});

users.get('/login', (req, res)=>{
  res.render('login.html.ejs');
});

users.post('/login', db.loginUser,(req, res)=>
{ req.session.user= res.rows;
  //force a save because of async issues 
  req.session.save(function(){
  res.redirect('/');
});
});

module.exports = users;
