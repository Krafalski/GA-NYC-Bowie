pry = require('pryjs')
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var pg = require('pg');
var path = require('path');
var userRoutes = require( path.join(__dirname, '/routes/users'));
var expressJWT  = require('express-jwt');
var jwt         = require('jsonwebtoken');
var app = express();
var secret = "my sweet secret"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('short'));
app.use(express.static(path.join(__dirname,'public')))

app.get('/stuff', function(req,res) {
  req.user
  res.json('blerrrrggg')
})

app.use('/users', userRoutes)

var port = process.env.PORT || 3000;
var server = app.listen(port)
