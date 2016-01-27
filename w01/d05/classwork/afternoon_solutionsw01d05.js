##Methods!
Now we will rewrite our MTA application from last night in a different way. Create a 
function which returns an object. The function takes one argument which
we call data, which is an object containing our mta structure.
The object the function returns should have the following properties

data
an object with all line information
lines()
this is a function which returns an array with all the lines
stops(line)
function which takes one argument, and returns an array with all the stops of the selected line
distanceSingleLine(line, stop1, stop2)
function which returns the distance between stop1 and stop2 located on line line
distance(line1, stop1, line2, stop2)
function which returns the distance between stops on different lines.



var mta = {
"n": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"l": ["8th", "6th", "Union Square", "3rd", "1st"],
"six": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

var object = {

  lines:

  stops:

  distanceSingleLine:

  distance:

}
