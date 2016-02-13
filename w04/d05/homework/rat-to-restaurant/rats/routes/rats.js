var request     = require('request');
var express     = require('express');
var rats        = express.Router();

var ratsRemoteData = 'https://data.cityofnewyork.us/resource/3q43-55fe.json'



rats.get('/', function (req, res){
  request.get( ratsRemoteData, parseData.bind(res) )
});

module.exports = rats;




function parseData (err,response, body) {
  var data = JSON.parse(body);
  this.send(data);
}
