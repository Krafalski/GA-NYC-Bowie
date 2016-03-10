/*global require process*/

'use strict';

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3009;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// serve static files
app.use(express.static(path.join(__dirname,'public')));

// set up some logging
app.use(logger('dev'));

app.get('/plain', (req,res) => {
  res.render('plainJSTimer');
});

app.get('/react', (req, res) => {
  res.render('reactTimer');
});

// turn me on!
app.listen(port, () => {
  console.log('server here! listening on', port);
});
