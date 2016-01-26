console.log("LINKED");


// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// Starter code for the body
var body = document.querySelector('body');

function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    var mEarth = document.createElement('section');
    mEarth.setAttribute('id','middle-earth');
    // add each land as an article tag (add them one by one in a loop)
    var theShire = document.createElement('article');
    var Rivendell= document.createElement('article');
    var Mordor= document.createElement('article');


    mEarth.appendChild(theShire);
    mEarth.appendChild(Rivendell);
    mEarth.appendChild(Mordor);

// not sure how to do this - syntax...confusion
  //  for (i=0; i<lands.length;i++){
    //  var lands[i]. ????is this syntax allowed?
    //}
    // inside each article tag include an h1 with the name of the land
    theShire.innerHTML = '<h1>The Shire </h1>';
    Rivendell.innerHTML ='<h1>Rivendell</h1>';
    Mordor.innerHTML ='<h1>Mordor</h1>';
    // each article should also have a class equal to it's name ('The Shire' element should have a class of 'The Shire')
    theShire.setAttribute('class', 'The-Shire');
    Rivendell.setAttribute('class','Rivendell');
    Mordor.setAttribute('class','Mordor');

    // append middle-earth to your document body
    body.appendChild(mEarth)
};

function makeHobbits() {
  var mhobbits = document.createElement('article');
  var unordered= document.createElement('ul');

  //for (i=0; i<hobbits.length; i++){
    //creat an li element that contains each hobbit
     var li = document.createElement('li');
     li.innerHTML = hobbits[0];

    //append to the newly created ul element
  //}
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    unordered.appendChild(li)
    mhobbits.appendChild(unordered);

    // give each hobbit a class of hobbit
    //for loop? .setAttribute('class', 'hobbit');
};

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.setAttribute('id', 'the-ring');
    // give the div a class of 'magic-imbued-jewelry'
    ring.setAttribute('class','magic-imbued-jewelry');
    // add the ring as a child of Frodo
    //querySelector should only select 1st element, even if there are more
    var hasRing = querySelector('li.');
     hasRing.appendChild(ring)

};


function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
};

function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
};

function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
};

function forgeTheFellowShip() {
    // create a new div with an id of 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
    // append the fellowship div to rivendell
};

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
};

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
};

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
};
