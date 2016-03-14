const express     = require('express');
const users       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('./../db/pg');
const secret      = 'my sweet bowie secret'
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');

users.get('/', (req, res) => {
  res.json({data: 'success'})
})

users.post('/', db.createUser, (req, res) => {
    res.status(201).json({data: 'success'});
})

users.post('/login', db.loginUser, (req, res) => {
  var token = jwt.sign(res.rows, secret)

  res.json({agent: res.rows, token: token})
})

module.exports = users;
