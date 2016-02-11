X-files
to do :

first of all, work on the cow.
remember for node:

var input = process.argv;
console.log(input[2]);

so...

node example.js howdy
will print out:
howdy

neato!

--
Now to loop through an array ...
given an array of objects:

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

for (var i=0; i<students.length; i++){
console.log( chalk.blue(students[i].first));
}

BUT! I really should be using each or for each...
Let's figure that out

students.forEach(function(lastname){
  console.log(lastname.last);
});

this will print out people's last names! wooot!
It would be cool to think of how to do the chalk thing... but onwards to the next thing for the x-files thing


in node, we have to take two arguments that are really entered as one because we will put in an equals sign so...

take the argument with the = in it and split it in two
