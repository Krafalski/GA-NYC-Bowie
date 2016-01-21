var mta = {
"N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L": ["8th", "6th", "Union Square", "3rd", "1st"],
"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// Print a line console for each key in mta

var nlineName = "N";
var nlineStops = mta.N;

var output = "";
output += "The "
output += nlineName;
output += " line has ";
output += nlineStops.length;
output += " stops. They are: ";
for (var i = 0; i < nlineStops.length; i++) {
  output += nlineStops[i];
  output += ", ";
}

console.log(output);
