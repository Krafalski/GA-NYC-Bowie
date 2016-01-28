window.onload = function() {
    console.log('script.js linked');

    var intervalID;
    var counter = 0;
    
    function makeGreen(e) {
        this.className += ' green';
    };

    function makeRed(e) {
        this.className += ' red';
    };

    function makeBlank(e) {
        this.className = 'box';
    };

    function allBoxesAreChecked() {
        for (var i = 0; i < boxes.length; i++) {
            if (!boxes[i].checked) {
                break;
            }
        }
        if (i === boxes.length) {
            return true;
        }
        return false;
    }

    function flash() {
        for (var i = 0; i < boxes.length; i++) {
            if (boxes[i].className === 'box green') {
                boxes[i].className = 'box red';
            } else {
                boxes[i].className = 'box green';
            }
        }
        counter++;
        if (counter > 5) {
            window.clearInterval(intervalID);
        }
    }


    // make an array of boxes
    var boxes = [];
    for (var i = 1; i <= 4; i++) {
        boxes.push(document.getElementById('box-' + i));
    }
    
    // boxes array has four nodes

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', makeGreen);

        boxes[i].addEventListener('mouseleave', makeBlank);

        boxes[i].addEventListener('click', function(e) {
            this.removeEventListener('mouseenter', makeGreen);
            this.removeEventListener('mouseleave', makeBlank);
            
            this.checked = true;
            
            if (allBoxesAreChecked()) {
                intervalID = window.setInterval(flash, 500);
            }
        });
    }

};
