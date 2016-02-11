var http         = require('http'); //module that allows for http
var url          = require('url');//module that ...something...url
var fs           = require('fs');//file system link to other files
var server       = http.createServer().listen(9001);//listen sets the port
var xfiles       = fs.readFileSync("sightings.json", "utf8");
var xfilesDB     = JSON.parse(xfiles);



server.on('request', function(request, response){

    var urlObj = url.parse(request.url);
    var path = urlObj.pathname;
    var query =urlObj.query;


    if(path === "/") {

      response.writeHead(200, { 'Content-Type': 'text/html' });//the number is the response code
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the X-Files UFO Sightings Database!!!</h1>');
      response.write(query);

      response.write('</body></html>');
      response.end();}

    else {
      response.writeHead(200, { 'Content-Type': 'text/html' });//the number is the response code
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the X-Files UFO Sightings Database!!!</h1>');
      response.write('<body><h1>Welcome to the X-Files UFO Sightings Database!!!</h1>');
      response.write('</body></html>');
      response.end();

}}
);

// Listen for traffic on port 3000.
//server.listen(9000);
