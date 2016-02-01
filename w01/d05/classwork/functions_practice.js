//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
//
// var array = ["Adam", "Ben", "Lindsay"];
//
// var lengths = function(ArrayofStrings) {
//     return ArrayofStrings;
//
// }
//
// lengths(array);

var wordArray = ["This", "is", "an", "array"];
var newArray = [];
var lengths = function(array) {
  for(var i = 0; i<array.length; i++) {
    console.log(array[i].length);
  }
}

lengths(wordArray);

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(numb1, numb2, numb3) {
  var transmogrifiedResult = Math.pow((numb1 * numb2), numb3)
  return transmogrifiedResult;
}

transmogrifier(2,2,2);

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

/* http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/*/

var wordReverse = function(stringToBeReversed) {
  var reversedWord = stringToBeReversed.split("").reverse().join("");
  return reversedWord
};

wordReverse("Box");
