var http      = require('http'); //includes the http package
var urlParser = require('url');

//start the server
var server = http.createServer().listen(3000); // listens for traffic on port 3000


server.on('request', function(request, response){
	console.log( request.headers );

  var urlObj  = urlParser.parse( request.url );
  var pathname = urlObj.pathname; // parsing our the important info in the url

  console.log("requested: " + pathname);

  // returns a string with the contents of a basic HTML page as a response

  response.writeHead( 200, {'Content-Type': 'text/html'});
  response.write('<!DOCTYPE html>')
  response.write('<html lang="en">');
  response.write('<head>');
  response.write('<meta charset="utf-8">');
  response.write('<title>' + pathname + '</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('<h1> You dude,  hey wanted the ' + pathname + ' path!</h1>');
  response.write('</body>');
  response.write('</html>');
  response.end();

})
