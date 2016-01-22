//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// Submitted by Daniel
function lengths(arr){
	var solution = [];
	for (var i = 0; i< arr.length; i++){
		solution.push(arr[i].length);
	}
	return solution;
}

// Submitted by Harry
function length_map(arr) {
	var l = arr.map(function(el){
		return el.length;
	});
	return l;
} 


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
