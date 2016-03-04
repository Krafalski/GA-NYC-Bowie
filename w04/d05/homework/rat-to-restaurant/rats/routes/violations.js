var request     = require('request');
var express     = require('express');
var violations = express.Router();

var violationsRemoteData = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json';

//console.log("from violations JS file!!!!!")

violations.get('/', function (req, res){
  request.get( violationsRemoteData, parseData.bind(res) )
});


// violations.get('/:zip', req, res =>{
//   req.query.zipcode = req.params.zip;
//   request.get( {url:violationsRemoteData, qs:req.query}, parseData.bind(res) )
// })

module.exports = violations;

//below does not throw error, but do not know if sorting works...will need to investigate futher
//does help render the info though!


//parse data function - return to route that called it
function parseData(err, response, body) {    //body is jsut JSON string when it comes
  var data = JSON.parse(body)
  //no semicolon on above line! we are chaining and putting the chains on different lines
  //sort by date
  .sort( (a,b) => {
    var d2 = new Date(a.inspection_date);
    var d1 = new Date(b.inspection_date);

    //sorting instructions
    if(d1<d2) return -1;
    if(d1>d2) return 1;
    return 0;
  })
  //no semicolon above, we are continuing to chain on different lines
  .reduce((p,c)=>{
    //put same camis #s  (establishment id) together
    if ( !(c.camis in p) ) p[c.camis]=[]
    p[c.camis].push(c)
    return p

  },
//empty object is returned if else condition is not met
  {})

  this.send(data)

}
