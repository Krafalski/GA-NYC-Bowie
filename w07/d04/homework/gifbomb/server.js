// (function() {
//   'use strict';
//
// }());
var bodyParser  = require ('body-parser');
var express     = require ('express');
var morgan      = require ('morgan');
var path        = require ('path');
var request     = require ('request');

var app         = express ();

var apiKey      = 'api_key=dc6zaTOxFJmzC';
var gifData     = 'http://api.giphy.com/v1/gifs/'

app.use (express.static('./public/'));

app.use (morgan('dev'));

app.get('/', (req, res)=>{
  res.sendFile ('index.html');
});

app.get('/random', (req, res)=>{
  request({url: gifData+'random?'+apiKey, qs:{fmt:'json', limit:'2', }}, function (err,response,body){
      res.send(JSON.parse(body) );
  });
});

app.get('/kittens', (req, res)=>{
  request({url: gifData+'search?q=kittens&'+apiKey, qs:{fmt:'json'}},
  function (err,response,body){
        res.send(JSON.parse(body) );

  });
});

app.get('/puppies', (req, res)=>{
  request({url: gifData+'search?q=puppies&'+apiKey, qs:{fmt:'json'}}, function (err,response,body){
      res.send(JSON.parse(body) );

  });
});

app.get('/pokemon', (req, res)=>{
  request({url: gifData+'search?q=pokemon&'+apiKey, qs:{fmt:'json'}}, function (err,response,body){
        res.send(  JSON.parse(body) );

  });
});

app.get('/search/:searchParameter', (req, res)=>{
  request({url: gifData+'search', qs:{fmt:'json ', api_key : apiKey, q:req.params.searchParameter},json:true}, function (err,response,body){
        res.send(  JSON.parse(body) );

  });
});

app.get('/searchGifByID/:id', (req, res)=>{
  request({url: gifData+'search?q=kittens&'+apiKey, qs:{fmt:'json'}}, function (err,response,body){
    console.log (request);
        res.send(  JSON.parse(body) );

  });
});


var port = process.env.Port || 3000;
var server = app.listen (port, ()=>
console.log ('bomb!!', port, '//', new Date ()));
