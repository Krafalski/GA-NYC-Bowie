process.argv //holds all the things in the console

var name = process.argv[2];
//this will access what is written after the file name after
// node hello_something.js Name
var second_name = process.argv[3];
// node hello_something.js Name Second Name

console.log("Hello, " + name);
console.log("Hello, " + second_name);
