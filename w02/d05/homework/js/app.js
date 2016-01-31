//FOR GIT!

// alert ("connection successful!")

$( document ).ready(function () {
	//alert('onload working');

$( "button" ).on( "click", function (){
	// alert("on button on!");
	var newBoard = new Board();
	console.log('new board created'+ newBoard);
	//newBoard.
	startGame();


});

function Cell(){
	//value = x o or none
	this.value = "";
	//setState change value to x o or none
	this.setState = function (){};
	//playabe not sure - checks if piece is playble?
	this.playable = function (){
		//return boolean;
	};
};



function Board(){
	//not sure 
	arrayofCells =[];
	//gets set to current player
	this.currentPlayer = " ";
	//determines and sets winner
	this.winner = 'BANZAI!';

	startGame = function (){
		alert("game started!");
		//starts game, sets up board
		game.makeBoard();
		//sets current player
		console.log(this.winner);
		if(this.winner==='x'){
			this.currentPlayer ='x';
		} else if(this.winner==='o'){
			this.currentPlayer='o'
		} else{
		var randomPlayer = Math.random();
    	if (randomPlayer < 0.50) {
        	this.currentPlayer='o'
  //console.log(this.currentPlayer);
    	} else  {
        	this.currentPlayer='x'
  //console.log(this.currentPlayer);
		 }
		  }

	
	//adds cells to baord
	

	}

	this.makePlay = function (position){
	//accept argument and set value
	//do nothing if cell has been played by...
	//do nothing if no cell in that position??

	}

	this.checkWin = function () {
	//check if last play was a winning play
	//return a boolean 

	}
};

//close window.onload }


var game ={
	//fills up with the objects from cell constructor
	gameBoard: {},
	//create a new board for the game
	makeBoard: function (){
		//alert("makeBoard connected!")
		for (var i=0; i<9; i++){
			var createdDiv= $( '<div>' ).addClass('cell').attr('cell-number', i);
			
			if (i===0||i===3||i===6){
				createdDiv.addClass('row')
			}
			$( '#game' ).append(createdDiv);
			var createCellObjects = new Cell("cell"[i]);
			arrayofCells.push(createCellObjects);
		};
		function addEventsToCells() {
			$('.cell').on('click', makePlay);
		}
		addEventsToCells();
	

	},

	//start game, show current state?
	start: function (){

	},

	//keep calling this until game is over
	play: function (position){

	}
};

function testAlert (){
	alert("another piece of the puzzle is solved!")
}

//window onload bracket do not delete
});
