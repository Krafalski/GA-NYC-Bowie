// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`

function updateScore(score) {
    var scoreElement = document.querySelector('.score');
    scoreElement.innerHTML = score + ' points';
}

document.body.addEventListener('click', function(event) {
    alert('YOU MISSED');
    updateScore(0);
    var ring = document.querySelector('.ring');
    ring.setAttribute('style', "background-color: ");
});
var ring1 = document.querySelector('.ring-1');
var ring2 = document.querySelector('.ring-2');
var ring3 = document.querySelector('.ring-3');
// Your code goes here:


var ring1 = document.getElementsByClassName('ring-1');
ring1[0].addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Nice Shot You Hit The 3rd Ring');
}
);

var ring2 = document.getElementsByClassName('ring-2');
ring2[0].addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Nice Shot You Hit The 2nd Ring');
}

);

var ring3 = document.getElementsByClassName('ring-3');
ring3[0].addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Nice Shot You Hit The Bullseye ');
}
);
