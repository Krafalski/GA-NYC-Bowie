(function() {
  'use strict';

}());

var express       = require ('express');
var morgan        = require ('morgan');
var path          = require ('path');


var app           = express();

app.use (express.static('./public/'));

app.use (morgan('dev'));

app.get ('/', (req, res)=>{
  res.send('index.html');
});


var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('it is time for stormy weather', port, '//' , new Date ()));
