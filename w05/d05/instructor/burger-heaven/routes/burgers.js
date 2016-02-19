'use strict'
var express = require('express');
var burgers = express.Router();

var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" )

// burgers route (collection)
burgers.route('/')
  .get((req,res)=>res.send('<h1>YOU GOT DA BURGAS!</h1>'))
  .post(dumpMethod)


module.exports = burgers;