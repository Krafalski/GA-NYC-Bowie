//iif tab to invoke use strict

(function() {
  'use strict';
}());

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
var methodOverride = require('method-override');
//for a debugging too - called pry it is ok to not use var- that will allow it to be global
pry = require('pryjs');
var pg = require('pg');
var connectionString = "postgres://karolinrafalski:CZM2125hon@localhost/applications";

var db = require('./db/pg');
var app = express();

 var userRoutes = require( path.join(__dirname, '/routes/users'));

 app.use(session({
   store:new pgSession({
     pg:pg,
     conString: connectionString,
     tableName: 'session'
   }),
   secret : 'burger',
   resave: false,
   cookie: {maxAge: 30*24*60*60*1000}//30  days
 }));


var howdy ='howdy';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('short'));

app.use(methodOverride('_method'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/users', userRoutes);

app.get('/',(req, res)=>{
  console.log('it works!');
  res.render('home.html.ejs', {
    user: req.session.user
  });
});

users.delete('/logout', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/');
  });
});


var port = process.env.PORT || 3000;
var server = app.listen(port);
