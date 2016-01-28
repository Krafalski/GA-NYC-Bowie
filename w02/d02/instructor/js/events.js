window.onload= function loadHandler(){
	console.log('loaded');

	var boxes = document.querySelectorAll('.square');
	
	var clickHandler = function (e) { console.log("I've been clicked. My name is " + e.target.id)}

	for(var i=0; i<boxes.length; i++){
	
		boxes[i].addEventListener('click', clickHandler);

	}

}


/*alert("I'm loaded brah.")*/