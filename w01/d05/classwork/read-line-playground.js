// var rls = require('readline-sync');
//
// var feeling = rls.question("How are you feeling today?");
// console.log(feeling);
//
// if (feeling === "good") {
//   console.log("I'm happy that you're good!")
// }


var rls = require('readline-sync');

var running = true;

while (running === true) {

var response1 = rls.question("please enter first digit");
var operation = rls.question("please enter + - * / ");
var response2 = rls.question("please enter second digit");
var number1 = parseInt(response1);
var number2 = parseInt(response2);

//
// if (operation === "+") {
//
// console.log(number1 + number2);
//
// }
//
// if (operation === "-") {
// console.log(number1 - number2);
//
// }
//
//  if (operation === "*") {
//   console.log(number1 * number2);
// }
//
//  if (operation === "/") {
//   console.log(number1 / number2);
// }

switch (operation) {
  case "+" :
  console.log(number1 + number2);
  break;
/////
case "-" :
console.log(number1 - number2);
break;
///
case "*" :
console.log(number1 * number2);
break;
///
case "/" :
console.log(number1 / number2)
break;
////
case "q":
running = false;


}

}
