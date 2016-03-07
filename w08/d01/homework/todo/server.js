(function() {
  'use strict';

}());

var express       = require('express');
var app           = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public/'));

app.get('/', (req, res)=>{
  res.render('index.html.ejs');
});

var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log('things to do today', port, '//', new Date()));
