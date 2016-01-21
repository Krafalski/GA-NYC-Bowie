/********************************
*
* Do you assignment in this file
*
*********************************/


// Part 1: Pythagorean Theorem

var a = 1;
var b = 2;

var c;

// Write an expression here which computes
// the correct value of c based on the values of a and b
Math.sqrt((a*a)+(b*b));
//expected answer: 2.23606797749979
// Log your answer (the value of c) to the console
console.log(Math.sqrt((a*a)+(b*b)));


// Part 2: Basic Conversion

var pounds = 155;

var kilograms;

// Write an expression here which computes
// the correct value of the variable kilograms
var kilograms  = pounds/2.2;
//expected answer: 70.45454545454545
// Log your answer to the console
console.log(kilograms);


// Part 3: Old Modems

var sizeInGB = 25;

var timeToDownload;

// Write an expression here which computes
// the correct value of the variable timeToDownload

//kilobit(kbit) = 1000 bits
// 1kbit = 125 bytes - thanks wikipedia!
//gigabyte is 1000000000bytes - thanks again wikipedia!
//need to multiply by 1kbit/125bytes to convert from bytes to bits
//multiply by 25 because Blade Runner is 25GB
//this will give the total number of seconds
var conversionBitToByte = 1 / 125;
var bladeRunnerFileSize = 25 * 1000000000;
//convert to hours, minutes and seconds

var totalMinutes = timeToDownload / 60;
var leftoverSeconds = Math.floor(timeToDownload % 60)
var totalHours = Math.floor(totalMinutes/ 60);
var leftoverMinutes= Math.floor(totalMinutes % 60);
//expected answer :5555 hours : 33 minutes : 20 seconds
// Log your answer to the console
console.log(totalHours + " : " + leftoverMinutes + " : " +
leftoverSeconds  )


// Part 4: Killer Caffeine

// For this part create you own appropriately named variables for
// any values you want to use

//cup of coffee is 95miligrams need 6000milligrams per 100lbs
//how many cups to kill one pound of human?
//6000milligrams/95miligrams = # of cups of coffee per 100lbs
//divide that by100 ->combine into 1 calculation
var cupsOfDeathPerPound = 6000/9500;
var bodyWeightPounds = 240;
var personalizedDeathThresholdCoffee = cupsOfDeathPerPound * bodyWeightPounds;
// Compute the number of cups
//expected answer :~150 cups of coffee
// Log the answer to the console
console.log(personalizedDeathThresholdCoffee + " cups of coffee needed for suicide by coffee" )
