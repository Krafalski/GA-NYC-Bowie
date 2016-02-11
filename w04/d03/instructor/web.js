// 'http://www.myawesomesite.com/mypage?name=bio'

var http = require('http');
// var fs = require('fs');

var server = http.createServer().listen(9001);

console.log('I\'m listening on port: 9001');

server.on('request', function(req, res) {
    console.log(req.url);

    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>Cool Story Bro');
    res.write('<script>console.log(\'Heyooo\');</script>');
    res.write('</html>');
    res.end();
});
