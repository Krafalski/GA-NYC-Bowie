//create a function for input
//change to whatever it will be when I get event listner working
//this should work in node
var rls = require('readline-sync');

function getInput (){
  var entered = rls.question("Ask loanbot: ");
  console.log ("You asked: " + entered)
  return entered;
}
//for node, replace wehn in browser
//getInput()


//convert input into a string

function stringToArray(){
  var grabInput = getInput();
  var inputToArray = grabInput.split(' ');
  //console.log(typeof inputToArray + " " +grabInput);
  //doesn't look like it in node, but is an array?
  return inputToArray;
}


// think about putting this function in an object called loanbot

//eventual thing for browser
//take string input
//call other function to create loanbot response
//append innerHTML to li
//append li to ul in the 'conversation window'

//loanbot response to window
//take whatever final string loanbot says and do 'eventual thing for browser (append innerHTML to li, append to ul)'
var purse = 10000;
// var botTasks ={
//   grabInputToArray: stingToArray();//currently written outsie of function
function processInput(){
  var processArray =stringToArray();
  //this should be a switch statement
  if (processArray[0] === 'purse'){
    console.log("Loanbot has " + purse + " dollars. ")
  }
  else if (processArray[0] === 'loan'){}
  else if (processArray[0] === 'ledger'){}
  else if (processArray[1]=== 'interest'){}
  else if (processArray[0]=== 'set'){}
  else if (processArray[0]==='collect'){}
  else {console.log ('error with input')}
}
 processInput();//currently written outside of function
//
// }
