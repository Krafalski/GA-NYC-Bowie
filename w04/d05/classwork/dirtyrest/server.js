'use strict';

var express = require('express');
var app     = express();
var request = require('request');
var logger  = require ('morgan');
var remoteData = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json';

app.use(logger('dev'));

var port = 3000;
// var server = app.listen (port, function (){
//   console.log ('the server started');
// })
//
// app.get ( remoteData , function () {
//   function (error, response, body ){
//     if (!error && response.statusCode ==200){
//       console.log(body); //show HTML of the page
//     }
//   )};
// });



app.get ('/', function (req, res) {
  res.send ('<h1> hello world</h1>');
});

// app.get ('/showListings', (req, res)=>{
//   request (remoteData, function(error, response, body){
//     if (!error && response.statusCode == 200) ?
//       res.send(body) : res.sendStatus(404);
//     }else{res.sendStatus (401)}
//   })
// })

//updated from the previous
app.get ('/showListings', (req, res)=>{
  request (remoteData, parseData.bind(res))
});



function parseData(err,res, body){
  var data = JSON.parse(body)
  /// using the . to chain the functions? no semi colons then?
//filter by grade A
.filter(el=>grade !=='A')
//order by inspection date
.sort(function (a,b){})
/group the records by establishment (camis number)
.reduce(function(prev, curr){},{})
this.send(pData);



  var pData= data.filter(el => el.grade !=='A');
  this.send(pData);
  //this used to be res, but couldn't be because scope so bind from above and now this is what has been bound
}









app.listen (3000, ()=> console.log('I am running'));
