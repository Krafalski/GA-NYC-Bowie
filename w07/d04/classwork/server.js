(function() {
  'use strict';

}());

var express     = require ('express');
var morgan      = require ('morgan');
var path        = require ('path');

var app         = express ();

//var diceRoutes = require( path.join(__dirname, '/routes/dice'));

app.use (express.static('./public/'));

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render ('index.ejs');
});

app.post('/', (req, res)=> {
  res.send ('u did it! u posted!');
});


var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('lets roll!', port, '//', new Date ()));
