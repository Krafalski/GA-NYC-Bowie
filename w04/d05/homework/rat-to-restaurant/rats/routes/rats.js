var request     = require('request');
var express     = require('express');
var rats        = express.Router();
var app         = express();

var ratsRemoteData = 'https://data.cityofnewyork.us/resource/3q43-55fe.json'


rats.get('/results',(req,res)=>{
  req.query.zipcode = req.params.zip;
  request.get({url:ratsRemoteData, qs:req.query},
  parseData.bind(res) );
});





//gets all the unformatted data and posts it to /resutls
rats.get('/results', function (req, res){
  request.get({url:ratsRemoteData, qs: req.query}, parseData.bind(res) )
});

//no idea what this does
module.exports = rats;

function parseData (err,response, body) {
  var data = JSON.parse(body);
  //the following is for sorting//
  //console.log(data);
  var interestingData = data.map(function(obj){
    return{incident_zip: obj.incident_zip, borough: obj.borough, location_type:obj.location_type, latitude: obj.latitude, longitude: obj.longitude, descriptor: obj.descriptor }
  })

  var newData=[];
  // for (var i=0; i<data.length; i++){
  //   if (data[i].incident_zip== 10010){
  //     newData.push(data[i]);
  //   }
  // }
  //make this back to data when above loop is removed
  this.render('rat_sighting_results.html.ejs', {
    interestingData:interestingData
  });
}
