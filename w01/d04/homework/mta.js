//MTA - The NYC Subway System

var argument1 = process.argv[2];
var argument2 = process.argv[3];
var argument3 = process.argv[4];
var argument4 = process.argv[5];

//MTA data - copy paste from readme.md
var mta = {
"N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L": ["8th", "6th", "Union Square", "3rd", "1st"],
"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
"Q": ["57th", "Herald Square", "Union Square", "Canal St."]
}


//Features

//note: includes bonus more informative
//note: includes bonus 2 add Q line
//note: does not do line transfers

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
    holdArray = mta['6'];
    makeString = holdArray.join(", ");
    console.log(makeString);
  }
  else if(argument2 ==='Q'){
    holdArray = mta['Q'];
    makeString = holdArray.join(", ");
    console.log(makeString);
  }
  else {console.log ("This train line does not exist. Please consider starting a petition.")}
  //console.log("argument2 is " + argument2)
 //console.log(mta['argument2') --does not work
 //console.log(mta.argument2) --also does not work, but did not expect this one to work
}

//3. A user can calculate the total number of stops between two stations.
//user enters: node mta.js calculate L union_square 6 33rd
//argument order: calculate line station station
if (argument1 === 'calculate'){
  var holdArrayN = mta.N;
  var holdArrayL = mta.L;
  var holdArray6 = mta['6'];
  var holdArrayQ = mta.Q;
  var firstStop = argument3;
  var finalStop = argument4;
  var totalStops;


  if ((argument3 === undefined || argument4 === undefined) && argument1 === 'calculate'){
console.log ("You must provide the 4 arguments for this to work!: 'calculate' startingLine firstStop LastStop")
}
  if (argument2 ==='N'){
    firstStop = holdArrayN.indexOf(argument3);
    finalStop = holdArrayN.indexOf(argument4);
    totalStops = Math.abs(firstStop - finalStop);
  }
  if (argument2 ==='L'){
    firstStop = holdArrayL.indexOf(argument3);
    finalStop = holdArrayL.indexOf(argument4);
    totalStops = Math.abs(firstStop - finalStop);
  }
  if (argument2 ==='6'){
    firstStop = holdArray6.indexOf(argument3);
    finalStop = holdArray6.indexOf(argument4);
    totalStops = Math.abs(firstStop - finalStop);
  }
  if (argument2 ==='Q'){
    firstStop = holdArrayQ.indexOf(argument3);
    finalStop = holdArrayQ.indexOf(argument4);
    totalStops = Math.abs(firstStop - finalStop);
  }

console.log ("Your trip from " +
 argument3 +
 " " +
 argument2 +
 " station to the " +
 argument4 +
 " " +
 argument2 +
 " station is " +
 totalStops +
 " stops long."
);
}
