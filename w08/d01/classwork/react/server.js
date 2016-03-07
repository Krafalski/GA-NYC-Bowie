(function() {
  'use strict';

}());

const express = require ('express');
const app     = express();


app.set ('view engine', 'ejs');
app.set('views', './views');

app.use (express.static('./public/'));

app.get('/', (req, res)=>{
  res.render('index.html.ejs');
});

var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('react', port, '//', new Date ()));
