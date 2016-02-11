var http = require("http");
var urlParser = require ("url");

var server = http.createServer().listen(3000);

server.on('request',function (request, response){
  console.log ( request.headers );

var urlObj =urlParser.parse (request.url);
var pathname = urlObj.pathname; //

console.log("requested: " + pathname);
});
