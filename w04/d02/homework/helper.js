var fs = require('fs');// what does this do again?
var http = require('http');
var url = require('url');//from the cruise movie database assignment
var server  = http.createServer(); //creates server
var sightingsDBText = fs.readFileSync("sightings.json", "utf8");//links to JSON file
var sightingsDB = JSON.parse(sightingsDBText); //takes the file that is a string and converts it to ajs readable array/object
//var argv = require ('argv');//does not work right now?
var input = process.argv[2];//will need to change this for the local server thing?

console.log(input);

function showNeat(sightings){
  var neat = '';
  neat = '====================\n';
  neat += sightings.date;
  neat += '\n';
  neat += sightings.city;
  neat += '\n';
  neat += sightings.state;
  neat += '\n';
  neat += sightings.shape;
  neat += '\n';
  neat += sightings.duration;
  neat += '\n';
  neat += sightings.description;
  neat += '\n';
  // neat += '====================\n';

  console.log(neat);
}


//input will be something like 'state=SC'
//need to split it
input = input.split('=');
searchBy = input;
//console.log(searchBy);
input = input.shift();
console.log(input + "this is input after shift");
searchBy = searchBy.join(' ');
console.log(searchBy + 'this is searchBy after join');



//Old version
// var searchBy = input.pop();
// input = input[0];

console.log(input);
console.log (searchBy);

var testArray =["OR", "Salem"];

//function crossReference (testArray){
 console.log(testArray);

switch ( input ){
  case 'date':
  sightingsDB.forEach(function(sightings){
    if (sightings.date.toUpperCase() === searchBy.toUpperCase()){
      showNeat(sightings);}});
  break;
  case 'city':
  sightingsDB.forEach(function(sightings){
    if (sightings.city.toUpperCase() === searchBy.toUpperCase()){
      showNeat(sightings);}});
  break;
  case 'state':  sightingsDB.forEach(function(sightings){
      if (sightings.state.toUpperCase() === searchBy.toUpperCase()){
         //console.log(sightings);
      showNeat(sightings);
      //console.log(JSON.stringify(sightings));
    }});
  break;
  case 'shape':
  sightingsDB.forEach(function(sightings){
    if (sightings.shape.toUpperCase() === searchBy.toUpperCase()){
      showNeat(sightings);}});
  break;
  case 'duration':
  sightingsDB.forEach(function(sightings){
    if (sightings.duration.toUpperCase() === searchBy.toUpperCase()){
      showNeat(sightings);}});
  break;
  case 'description':
  sightingsDB.forEach(function(sightings){
    if (sightings.description.toUpperCase() === searchBy.toUpperCase()){
      showNeat(sightings);}});
  break;
  default:
      console.log('whoops! There was an error!');
}

//}

//crossReference();
//JSON
// var x = [1,2, {key: value}, {otherkey: 'othervalue'}];
//
//
// var string = JSON.stringify(x);
//
// var newX =JSON.parse(string);
//
//
// console.log(x[3].otherkey);//this is just an array
//
// console.log(string[3].otherKey) // NO NO!!! this is a string
