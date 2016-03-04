/*global require __dirname process*/

'use strict';

var path = require('path');
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

   
app.listen(3000, function() {
  console.log(`Listening on port 3000`);
});
