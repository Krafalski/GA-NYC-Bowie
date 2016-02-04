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
    scoreElement.innerHTML(score + ' points');
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

ring1.addEventListener('click', function(evt) {
    alert('ring 1 was clicked');
    evt.stopPropagation();
});
ring2.addEventListener('click', function(evt) {
    alert('ring 2 was clicked');
    evt.stopPropagation();
});

ring3.addEventListener('click', function(evt) {
    alert('ring 3 was clicked');
    evt.stopPropagation();
    setTimeout(function(){
        alert('clearing interval');
        clearInterval(myID);
    }, 6000);

    var myID = setInterval(function() {
        alert('2 seconds have passed');
    }, 2000);

 
});

