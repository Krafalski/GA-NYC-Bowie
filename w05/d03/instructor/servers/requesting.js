var request = require('request');

var movies = [];


function logActorNames(id) {
    request('http://omdbapi.com/?i=' + id, function (error, response, body) {
        var movie = JSON.parse(body);
        console.log('The Actors in ' + movie.Title + ' are:');
        console.log(movie.Actors);
        number2(movie.Writer);
    });
};

function getMoviesByWriter(writer) {
    
};

request('http://omdbapi.com/?s=terminator', function (error, response, body) {
//   console.log('Error is: ' + error);
//m   console.log('Response is: ', response.headers);
//    console.log('Body is :' + body);

   var parsedResponse = JSON.parse(body);
    
//  console.log(parsedResponse);

    parsedResponse['Search'].forEach(function(movie, index) {
 //       console.log('Result number: ' + index);
  //      console.log(movie);
        movies.push(movie);
    });

/*    for(var i = 0; i < movies.length; i++) {
        logActorNames(movie[i]);
    }
  */  
    movies.forEach(function(movie) {
        if (typeof movie.imdbID === 'string') {
            logActorNames(movie.imdbID);
        }
    });
    
});


// logActorNames('tt0103064');

/*
function doStuff(movies) {
    movies.forEach(function(movie) {
        console.log(movie.Title);
    });
}

doStuff(movies);

console.log('Here are my movies outside of request: ', movies);
*/



