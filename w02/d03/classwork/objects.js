// objects

var adam = 'Raz'
var myObject = {
  "adam": 1234,
  "viorel": 4321
}
var viorel = 'adam';
myObject['viorel']; // 4321
myObject.viorel; // 4321
myObject[viorel]; // 1234
myObject['adam'];


var contacts = [
  {name: 'Adam', number: 1234},
  {name: 'Viorel', number: 4321}
];

for (var i in myArray) {
  console.log(i);
}

for (var i = 0; i < myArray.length; i++){
  console.log(i);
}

var keys = Object.keys(myObject) // ['adam', 'viorel']
for (var i = 0; i < keys.length; i++){
  console.log(keys[i]);
  console.log(myObject[keys[i]]);
}

for (var key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}


var myObject = {};
myObject.adam = 1234;
myObject.viorel = 4321;


var people = ['Peter', 'Harry', 'Ari'];

people[0]
people[1]

var weirdArray = {
  "0": 'hey',
  "1": 'man'
}

weirdArray['0'];
weirdArray[0];
var normalArray = ['hey', 'man'];
normalArray[0]
