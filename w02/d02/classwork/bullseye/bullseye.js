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

// Your code goes here:
