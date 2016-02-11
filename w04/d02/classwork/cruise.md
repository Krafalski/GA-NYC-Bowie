## Implement the otcmdb (the Tom Cruise Open Movie Database)


  Parameter | Description | Example
  ------ | ------ | ------
   t | title | ```http://127.0.0.1:3000/?t=top+gun```
   id | omdb id | ```http://127.0.0.1:3000/?id=tt0092099```
   y | year of release | ```http://127.0.0.1:3000/?y=1986```
   d | director | ```http://127.0.0.1:3000/?d=Tony+Scott```

**Bonus**:
 - optional query parameter: r=json or r=html (to return rendered html instead of json)

```javascript
var http         = require('http');
var url          = require('url');
var fs           = require('fs');
var server       = http.createServer();
var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
var cruiseDB     = JSON.parse(cruiseDBText);

/*
 * Setup the server.
 * Have the HTTP server listen for requests and handle them.
 * The requestEventHandlerCallback will be passed
 * both the request object and a partially prepared response object.
 */
server.on('request', function(request, response){
    var urlObj = url.parse(request.url);

    if(urlObj.query){
      var queryPortion = urlObj.query.split("=");

      if(queryPortion[0]==="t"){
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

    



});

// "Start" the server by having it listen on a port.
server.listen(3000);

```
