(function() {
  'use strict';
}());

var bodyParser    = require ('body-parser');
var express       = require ('express');
var morgan        = require ('morgan');
var path          = require ('path');
var pgp           = require ('pg-promise');
var dotenv        = require ('dotenv');
var db            = require ('./db/pg-prom.js');



var app           = express();
dotenv.load();

app.use(express.static(path.join(__dirname, 'public')));

app.use (express.static('./public/'));

app.use (morgan ('dev'));

app.use (bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get ('/', (req, res)=>{
  res.render('index');
});

app.get ('/presidents', db.showPresidents, (req, res)=>
{
  res.send (res.rows);
});

app.post('/presidents', db.addPresident, (req, res)=>{
  res.send (res.rows);
});

var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('Elect Trump! Elect for a Brave New World!', port, '//', new Date()));
