// var x = [1, 2,
//          {key: 'value'},
//          {otherkey:'otherValue'}];

// var y = {kay1: 'value1',
//          kay2: 'value2'};

// // turn my array of objects (whatever data structure)
// // into a string represtation.

// console.log(x[3].otherKey);  // => otherValue

// var string = JSON.stringify(x);

// console.log(string);

// string[3].otherKey; // NO NO

// var newX = JSON.parse(string);

// console.log(newX);

// newX[3].otherKey


var fs = require('fs');

var JSONstring = fs.readFileSync('./jsons/cruise_data.json', 'utf8');

// console.log(JSONstring);
// console.log(typeof JSONstring);

// console.log(JSONstring);

var mystring = 'heyo';
var newstring = mystring;
newstring = 'naha';

var movies = JSON.parse(JSONstring);
// console.log(movies[2]);

// Add to each movie a property of seen, asign it a random true or false value

movies.forEach(function(movie) {
    movie.seen = !!(Math.floor(Math.random()*2));
});

fs.writeFileSync('./new_cruise_is_cool.json', JSON.stringify(movies), 'utf8');


