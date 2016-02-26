window.onload = function() {
    // First we create an array of all the checkboxes - we will use this twice in our app
    var checkboxes = [];
    var nodes = document.querySelectorAll('.inbox [type="checkbox"]');
    for (var i = 0; i < nodes.length; i++) {
        checkboxes.push(nodes[i]);
    }

    // we create a variable called lastChecked that will hold a reference to the last checkbox we checked. This will let us figure out which way to go
    
    var lastChecked;

    // create the handler that will run when someone "clicks" a box
    function handleCheck(e) {
        // check if 1) they are holding shift 2) we checked this box (it's not an un-check)
        if(e.shiftKey && e.target.checked) {
            // create a flag boolean - more on this in a sec
            var inBetween = false;

            // loop through each input
            checkboxes.forEach( function(input) {

                // Here is where we do the magic
                // We want to see if the current checkbox is 
                // either the input we checked, or the last one we checked
                // This will allow us to turn on the checking (inBetween) when we pass one of them, and turn it off when we pass the other. 
                if(input === e.target || input === lastChecked) {
                    inBetween = !inBetween;
                }
                
                // finally, if we are currently inBetween the lastChecked and the one that
                // was just checked. Go ahead and mark that one as checked
                if(inBetween) {
                    input.checked = true;
                }
            });
        }
        // update last Checked regardless
        lastChecked = e.target;
    }

    // loop over each checkbox and attach the event listener to it
    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener('click', handleCheck);
    });
};
