var express = require('express');
var request = require('request');

var app = express();

app.listen(3000, function() {
    console.log('schmee');
});
/*
app.use(function(req, res, next) {
    console.log('My random function is working');
    next();
});*/


function handler (req, res, next) {
};

app.get('/', function(req, res, next) {
    console.log('got schmee');
    request('http://omdbapi.com/?s=terminator', function (error, response, body) {
        var movies = [];
        var parsedResponse = JSON.parse(body);
        parsedResponse['Search'].forEach(function(movie, index) {
            movies.push(movie);
        });
        req.movies = movies;
        next();        
    });
   // res.send('Hallo');
}, function(req, res) {
    console.log('another schmee');
    res.send(req.movies);
});

