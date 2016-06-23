
var express = require('express');
var users = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');

users.get('/', (req, res)=>{
  res.json({data: 'success'})
})

users.post(db.createUser, (req, res) => {
    res.status(201).json({data: 'success'});
    res.redirect('/');
  })


module.exports = users;
