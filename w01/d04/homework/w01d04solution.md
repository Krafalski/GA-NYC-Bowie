# MTA - The NYC Subway System

Tonight you will build your first interactive command line application.

## Background
There are 3 subway lines:
  - The **N** line has the following stops: *Times Square, 34th, 28th, 23rd, Union Square, and 8th*
  - The **L** line has the following stops: *8th, 6th, Union Square, 3rd, and 1st*
  - The **6** line has the following stops: *Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place*.
  - All 3 subway lines intersect at *Union Square*, but there are NO other intersection points.

## Data structure

In class you experimented with ways to represent the MTA. Feel free to use any data structure you find comfortable, but we suggest you use the following

```javascript

var mta = {
"n": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"l": ["8th", "6th", "Union Square", "3rd", "1st"],
"six": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

// // <!-- ```
// //
// // <!-- ## Features -->
// 1. A user can list the available lines.
//
//   ```bash
//   node mta.js lines
//   n
//   l
//   six
//   ``` -->


for (key in mta) {
 var lines = console.log(key);
}


for (key in mta) {
  console.log(key + ": " + mta[key]);
}



2. A user can see all of the stops for a line.
  ```bash
  node mta.js stops L
  8th, 6th, union_square, 3rd, 1st
  ```


  var mta = {
    "n": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "l": ["8th", "6th", "Union Square", "3rd", "1st"],
    "six": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }


    for (key in mta) {
      console.log("The " + key + " stops at " + mta[key].join( ", "));
    }



//"l": ["8th", "6th", "Union Square", "3rd", "1st"],
//"six": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]



3. A user can calculate the total number of stops between two stations.
  ```bash
 node mta.js calculate L union_square 6 33rd
 3
 ```

 ```bash
  node mta.js calculate L union_square L 8th
  2
 ```



  // // <!-- ```
  // //
  // // <!-- ## Features -->
  // 1. A user can list the available lines.
  //
  //   ```bash
  //   node mta.js lines
  //   n
  //   l
  //   six
  //   ``` -->



    var nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

    var lLine = ["8th", "6th", "Union Square", "3rd", "1st"];

    var sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];



  var distanceOnTheSix = sixLine.indexOf("33rd", 4);

  var distanceOntheL = lLine.indexOf("Union Square", 1);

  var totalNumberofStops = Math.abs(distanceOnTheSix) + Math.abs(distanceOntheL);

  console.log("The total number of stops is " + totalNumberofStops);



4. A user is notified if they don't provide the correct number of arguments.



// I found the following function from this article but I don't understand how to use it: http://united-coders.com/matthias-reuter/handling-the-unexpected-type-safe-functions-in-javascript/

  var makeTypeSafe = function (f, parameterList) {
      var p = parameterList.length;

      // return a function that first checks the arguments before calling the
      // original function
      return function () {
          // check number of arguments
          if (arguments.length !== p) {
              throw "Unexpected number of arguments. Expected " + p + ", got " + arguments.length;
          }













## Keep in mind
- Break it down and follow your errors! Maybe try getting the program to work for a single train line before trying to tackle multiple lines.
- Reference the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for arrays and objects. How can we grab the index number if we already know the value of an element inside an array?

  ``` javascript
  var greeks = ["euripides", "aesop", "sappho"]
  greeks.indexOf("euripides")
  // 0
  ```


## Bonus
Make your output more informative.

   ```bash
   node mta.js calculate L union_square 6 33rd
   Your trip from the Union Square L station to the 33rd 6 station is 3 stops long.
   You will have to make 1 transfer at Union Square to the 6 line.
   ```


## Bonus 2
- Add the following line without making major modifications to your code:
- The Q line has the following stops: 57th, Herald Square, Union Square, Canal St.
- All lines still only intersect at Union Square!

## Ultra Bonus
Add the S line which has only two stops Times Square and Grand Central. You now have multiple intersections. Can you modify the code to handle this.
