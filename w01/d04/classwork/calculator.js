process.argv

var doMath = process.argv[2];
var firstNumber = parseInt(process.argv[3]);
var secondNumber = parseInt(process.argv[4]);
//var total = firstNumber doMath secondNumber;
console.log(firstNumber + doMath + secondNumber);
var total = firstNumber + secondNumber

console.log(total);
