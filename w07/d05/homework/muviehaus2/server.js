(function() {
  'use strict';
}());

var bodyParser    = require ('body-parser');
var db            = require ('./db/pg.js');
var dotenv        = require ('dotenv');
var express       = require ('express');
var morgan        = require ('morgan');
var path          = require ('path');
var pgp           = require ('pg-promise');
var request       = require ('request');


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

app.get ('/movies', db.showMovies, (req, res)=>{
  res.send (res.rows);
});

app.get ('/movies/search/:search', (req, res)=>{
  request ({url: 'http://www.omdbapi.com', qs:{s: req.params.search}, json:true}, function(error, response, body){
      //console.log(body);
      res.send (body);
  });
});


app.get ('/movies/:id/edit', (req, res)=>{
//need this route for single page rendering? I think so
});

app.post('/movies/:id/edit', db.editMovie, (req, res)=>{
  res.send( res.rows);
  res.redirect('/');
});

app.get ('/movies/:id', db.showMovie, (req,res)=>{
  res.send( res.rows);
});

app.post ('/movies/:id', db.deleteMovie, (req, res)=>{
  console.log ('hitting the delete route!');
  res.redirect('/');
});



var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('Out at the movies!', port, '//', new Date()));
