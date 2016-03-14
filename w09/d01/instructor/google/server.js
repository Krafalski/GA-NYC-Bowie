'use strict';

const express = require('express');
const app = express();
const request = require('request');

require('dotenv').config();

app.set('views', './views');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/getCoordinates/:address', getCoordinates, (req, res) => {
  res.send(res.coordinates);
});

app.listen(3000, () => {
  console.log('Listenin');
});

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

function getCoordinates(req, res, next)  {
  console.log(req.params.address);
  let conn = {
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: {
      address: req.params.address,
      key: process.env.APIKEY
    },
    json: true
  };
  
  request(conn, (err, resp, body) => {
    res.coordinates = body;
    next();
  });
};


