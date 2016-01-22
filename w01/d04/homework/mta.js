//MTA - The NYC Subway System

var argument1 = process.argv[2];
var argument2 = process.argv[3];
var argument3 = process.argv[4];
var argument4 = process.argv[5];

//MTA data - copy paste from readme.md
var mta = {
"N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L": ["8th", "6th", "Union Square", "3rd", "1st"],
"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


//Features

//1. A user can list the available lines.
//user enters: node mta.js lines
if (argument1 ==='lines'){
  for (var keys in mta){
    console.log(keys);
  }
}


// 2. A user can see all of the stops for a line.
// user enters: node mta.js stops L
if (argument1 ==='stops'){
  var holdArray;
  var makeString ="";
  if (argument2 ==='L'){
    holdArray= mta.L;
    makeString =holdArray.join(", ")
    console.log(makeString);
  }
  else if(argument2 ==='N'){
    holdArray =mta.N;
    makeString =holdArray.join(", ");
    console.log(makeString);
  }
  else if(argument2 ==='6'){
    holdArray =mta['6'];
    makeString =holdArray.join(", ");
    console.log(makeString);
  }
  else {console.log ("This train line does not exist. Please consider starting a petition.")}
  //console.log("argument2 is " + argument2)
 //console.log(mta['argument2') --does not work
 //console.log(mta.argument2) --also does not work, but did not expect this one to work
}
