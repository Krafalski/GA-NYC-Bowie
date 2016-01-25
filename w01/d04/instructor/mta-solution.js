var mta = {
"N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L": ["8th", "6th", "Union Square", "3rd", "1st"],
"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

for (var key in mta) {

    var lineOfText = "The ";
    lineOfText += key;
    lineOfText += " has ";
    lineOfText += mta[key].length;
    lineOfText += " stops. They are: ";
    
    for (var i = 0; i < mta[key].length; i++) {
        lineOfText += mta[key][i] + ", ";
    }

    lineOfText = lineOfText.slice(0, -2);
    lineOfText += ".";
    
    console.log(lineOfText);    
}

    
