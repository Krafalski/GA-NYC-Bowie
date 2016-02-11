var http         = require('http');
var url          = require('url');
var fs           = require('fs');
var server       = http.createServer().listen(9000);//listen sets the port
var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
var cruiseDB     = JSON.parse(cruiseDBText);

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback
server.on('request', function(request, response){

    var urlObj = url.parse(request.url);
    var path = urlObj.pathname;

    console.log(urlObj);

    if(path === "/") {

      response.writeHead(200, { 'Content-Type': 'text/html' });//the number is the response code
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1>')



      response.write('</body></html>')
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

    }

    else if (queryPortion[0]==="t") {
      response.write("hello");
         if(urlObj.query){
           var queryPortion = urlObj.query.split("=");

               var foundIt = false;


               // Look through each movie in the database for a match.
               cruiseDB.forEach(function(movie){
                 var targetMovie = queryPortion[1].replace("+"," ");

                 if(movie.Title.toLowerCase() === targetMovie.toLowerCase()){
                     response.writeHead(200, { 'Content-Type': 'application/json' });
                     response.write(JSON.stringify(movie));
                     response.end();
                     foundit = true;
                 }
             });

              if(foundIt === false){
                  var error = { error : "movie not in the otcmdb!"};
                  response.writeHead(200, { 'Content-Type': 'application/json' });
                  response.write(JSON.stringify(error));
                  response.end();
              }

           } else {
                 // Guard against requests we cannot handle.
                 response.writeHead(400, { 'Content-Type': 'text/html' });
                 response.write("Bad Request");
                 response.end();
           }
         }



     else {

      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write('Bad Request');
      response.end();

    }
    // to handle Chrome and the favicon
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        console.log('favicon requested');
    }
});

// Listen for traffic on port 3000.
server.listen(3000);
