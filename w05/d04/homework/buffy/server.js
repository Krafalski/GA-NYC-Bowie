var express = require ('express');
var morgan = require ('morgan');
var bodyParser = require('body-parser');

var db = require('./db/pg');
var dotenv =require('dotenv');
var app = express();

app.use( bodyParser.urlencoded( { extended: false} ) );
app.use( bodyParser.json());
app.use(morgan('short'));

app.use(express.static('./public/'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/buffy', db.showCharacters, function (req, res){
  res.render('buffydb.html.ejs',{characters: res.rows});

});

app.get('/buffy/new', db.addCharacters, function (req, res){
  res.render('addtobuffydb.html.ejs');
});
//from Raz!
// app.get('/buffy/:id', db.ShowCharacters, function (req, res){
//   var id= req.params.id;
//   res.render('id.html.ejs',{characters: res.rows[id-1]});
// });

// app.post('/buffy/add', db.addCharacters, function(req, res){
//   res.redirect('/buffy');
// })

var port = process.env.PORT || 3000;
var server = app.listen(port);
