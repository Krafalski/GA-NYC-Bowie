var http         = require('http');
var url          = require('url');
var fs           = require('fs');
var server       = http.createServer();
var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
var cruiseDB     = JSON.parse(cruiseDBText);

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 

    var urlObj = url.parse(request.url); 
    var path = urlObj.pathname;

    console.log(urlObj);

    if(path === "/") {

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1></body>')
      response.write('</html>')
      response.end();

    } else if (path === "/movies") {

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Tom Cruise has been in A LOT of movies!!!</h1>');
      response.write("<ol>");
      cruiseDB.forEach(function(movie) {
          response.write("<li>"+movie.Title + "</li>");
      });
      response.write("</ol>");
      response.write('</body></html>')
      response.end();

    } else {

      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write('Bad Request');
      response.end();

    }

});

// Listen for traffic on port 3000.
server.listen(3000);
