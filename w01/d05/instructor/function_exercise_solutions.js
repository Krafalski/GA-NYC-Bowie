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

//submitted by Feudi.
function transmogrifier(x,y,z){
	return Math.pow((x*y),z);
}

// Submitted by Shani
function transmogrifier2(num1, num2, num3) {
	var transmogrifiedResult = Math.pow((num1 * num2), num3);
	return transmogrifiedResult;
}



// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// submitted by Dan

function wordReverse(myString){
	return myString.split(' ').reverse().join(' '); //I'm showboating
}

/*BONUS*/ 
//greaterOfThree

//Define a function ``greaterOfThree`` that takes 
//three integers and returns the larger of the three.

//submitted by Max

function greaterOfThree (num1, num2, num3){
	if (num1 > num2 && num1 > num3){
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else {
		return num3;
	}
}
//Elton

/*function greaterOfThree (int1, int2, int3) {
	return Math.max(int1,int2,int3);
}*/
var greaterOfThree = Math.max; 



function greaterOfThree (int1, int2, int3) {
var arr2 = [int1,int2,int3];
arr2.sort(); // should be numeric instead of alpha
return arr2[arr2.length-1];
}




// line them up

// Write a function ``lineThemUp`` that takes three integers 
//as arguments and returns the integers as an array
// **bonus** rearrange the integers so they are in numerical order












