var input = process.argv;

//console.log(process.argv);
console.log(input[2]);

var students = [
    {first: 'Yue', last: 'Hou'},
    {first: 'Maxwell', last: 'Rayman'},
    {first: 'Elton', last: 'Cheng'},
    {first: 'Sara', last: 'Horowitz'},
    {first: 'Seif', last: 'Dorani'},
    {first: 'Emine', last: 'Koc'},
    {first: 'Ari', last: 'Ingber'},
    {first: 'Caleb', last: 'Rechten'},
    {first: 'James', last: 'Roberts'},
    {first: 'Dan', last: 'DiIorio'},
    {first: 'Lauren', last: 'Golik'},
    {first: 'Jonathan', last: 'Feudi'},
    {first: 'Arthur', last: 'Chen'},
    {first: 'Razaik', last: 'Boparai'},
    {first: 'Jimmy', last: 'Lin'},
    {first: 'Viorel', last: 'Belfiore'},
    {first: 'Peter', last: 'Nguyen'},
    {first: 'Daniel', last: 'Lawrence'},
    {first: 'Bryce', last: 'Krah'},
    {first: 'Patrick', last: 'McWilliams'},
    {first: 'Douglas', last: 'Walker'},
    {first: 'Adam', last: 'Kriger'},
    {first: 'Harry', last: 'Ganz'},
    {first: 'Jasmine', last: 'Vollherbst'},
    {first: 'Karoline', last: 'Rafaski'}];



var cowsay = require("cowsay");
var chalk = require('chalk');
//
console.log(cowsay.say({
	text : input[2],
	e : "oO",
	T : "U "
}));

var sayThis = "input";
 // var sayThisLength = sayThis.length-1;
 // var checkString= sayThis.substring(sayThisLength);
 // console.log(checkString);

//make switch cases for each color and name woot!!!
for (var i=0; i < students.length; i++){
console.log( chalk.blue(students[i].first));
}

students.forEach(function(lastname){
  console.log(lastname.last);
});
// console.log(cowsay.think({text:sayThis}));

//  if (checkString === '.'){
//    console.log(cowsay.think({text:sayThis}));
// }
//  else {
//    console.log(cowsay.say({text:sayThis}));
//  }


//console.log(cowsay.say({text:sayThis}));
