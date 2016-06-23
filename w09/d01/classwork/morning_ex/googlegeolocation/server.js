'use strict';

const express     = require ('express');
const app         = express();

app.use (express.static('./public/'));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.post('/', (req, res)=>{
  res.send('something from google, eventually')
})

var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('google geolocation', port, '//', new Date ()));
