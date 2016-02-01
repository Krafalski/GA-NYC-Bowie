console.log("main.js linked");


/*
Work within the Chrome Developer console. Once you have a working line of code, copy it over into your scripts/main.js file.

Query the DOM for the h1 and store it in a sensibly named variable.

Change the header's text so that it reads "Inhabitants of Los Angeles (1984)".

Query the DOM for any list items with the class of cop, and store the elements in a variable called cops.

Loop through all the cops, giving each the color of lightskyblue.


Query the DOM for the element with id of the-one-true-sarah-connor, and save it in a variable called theOneTrueSarahConnor.

Give theOneTrueSarahConnor the class of badass.

Create a div with the class of terminator, and append it to the div with the id of los-angeles.


///////////////////////////////////////////////////////////////////////////
Query the DOM for all elements that have the class collateral-damage, and save the elements in a variable called poorSouls.
Iterate through poorSouls, removing the elements from the DOM one by one.

Remove the terminator from the DOM.

 */

var heading1 = document.querySelector('h1');

var headerText = document.querySelector('Title');
headerText.innerText = "Inhabitants of Los Angeles";

var cops = document.getElementsByClassName('cop collateral-damage');
for (i=0; i<4; i++){
cops[i].style.color = "lightskyblue"; }

// creation


var term = document.createElement('div');
term.setAttribute('class', 'terminator');

var la = document.getElementById('los-angeles')
la.appendChild(term);

//////

var theOneTrueSarahConnor = document.querySelector('#the-one-true-sarah-connor');

theOneTrueSarahConnor.setAttribute('class', 'badass');



var pourSouls = document.getElementsByClassName('collateral-damage');
for (var i = 0; i < pourSouls.length; i++) {
pourSouls[i].remove();
}

document.body.style.background= "none";
