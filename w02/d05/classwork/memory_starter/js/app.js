$(document).ready(function() {
	console.log('loaded');

	function shuffle(o) {
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;

			};

			var arrayOfTiles = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"];
			// console.log(arrayOfTiles);
			start()
	function start() {

		var shuffledArray = shuffle(arrayOfTiles);
		// console.log(shuffledArray);
		makeAndDisplayTiles(shuffledArray);

	}

	// Invoke your chain of functions and listeners within window.onload


function makeAndDisplayTiles (array) {
// $("#game").empty();
// $("#info").empty();
for (var i=0; i<array.length; i++) {
	$('#game').append('<div class="column" id="'+array[i]+'" data-value="'+array[i]+'"></div>');
}
	// $("#game").append("<div>").addClass("column").attr("data-value", array[i]);
};

function addEventsToTiles() {
	var $column = $('.column');
	$column.on("click", makePlay);
};

function makePlay() {


		var $dataAttribute = $('.column');
		console.log($dataAttribute[1]);


}
addEventsToTiles();


});


// USE THIS TO SHUFFLE YOUR ARRAYS









// $( "p" ).add( "div" ).addClass( "widget" );
// var pdiv = $( "p" ).add( "div" );
