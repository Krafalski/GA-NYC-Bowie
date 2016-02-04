var x = {
    name: 'so x-y'
};

x.prototype; // Object

var y = Object.create(x);
y.car = 'too x-y';

var z = Object.create(y);
z.truck = 'way too x-y';
z.car = 'not so much';
z.car

// this

function whatIsThis() {
    console.log('This is: ' + this);
    return this;
}

whatIsThis();

var myObj = {
    whatIsThis: whatIsThis
}

myObj.whatIsThis();

var myNewObj = new whatIsThis();

document.ready

$(function() {
    $('div')

    var myDeck = new Deck();
    myDeck.getSuit();
})


$('div') // undefined

function Deck() {
    // construct my deck

    this.getSuit = function() {
        return $('.suit');
    };
}


document.querySelectorAll('div');
document.createElement('h1');

var jqueryCollectionofDivs = $('div');
var jqueryCollectionWithOneElement = $('<div>');

var $h1 = $('h1'); // I have a single h1
// returns [ <el> ]

var vanillaDom = $h1[0]; // Node!!
var jQueryEl = $h1.eq(0); // jQuery Collection with 1 element
var jQueryEl = $(vanillaDom); // jQuery collection with 1 element

$h1.on('click', handler);
vanillaDom.addEventListener('click', handler);
$(vanillaDom).on('click', handler);

$h1.id('blah');

jQuery();

// html
"<div class='game-container'></div>",


'<h1> TItle </h1>'
'<p> Description </p>'
'<div id="player1"> wqoidjoiwqd </div>'

//javascript
var $container = $('.game-container');
var $h1 = $('<h1>').text('Title');
$container.append($h1);
var $p = $('<p>').text('description');
$container.append($p);

domElement.addEventListener('click', function(evt) {
    this // evt.target
});

$(domElement).on('click', function(evt) {
    this // dom element of the event listener
});




