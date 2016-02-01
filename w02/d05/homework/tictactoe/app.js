 //alert ("connection successful!")

//$( document ).ready(function () {
	//alert('onload working');

$( "button" ).on( "click", function (){
	// alert("on button on!");
	var newBoard = new Board();
	console.log('new board created'+ newBoard);
	//newBoard.
	startGame();


});

function Cell(value){
	//value = x o or none
	this.value = "";
	//setState change value to x o or none
	this.setState = function (){
		console.log ("next up");
		console.log (currentPlayer);
		this.value= currentPlayer;
		if (currentPlayer ==="o"){
			currentPlayer ="x";
		}
		else if (currentPlayer ==="x"){
			currentPlayer ="o"
		}
		else {console.log("something has gone horribly awry")}
		//$append this.value to matching cell
		//in the css the appended text should appear in the div in some sort of nicer font and size

	};
	//playabe not sure - checks if piece is playble?
	this.playable = function (){
		if (this.value===""){
			return true;
		}
		else {return false;}
		//return boolean;
	};
};



function Board(){
	//not sure 
	var arrayofCells =[];
	//gets set to current player
	var currentPlayer = " ";
	//determines and sets winner
	var winner = 'BANZAI!';

	startGame = function (){
		//alert("game started!");
		//starts game, sets up board
		this.makeBoard();

		//sets current player
		console.log(winner);
		if(winner==='x'){
			currentPlayer ='x';
		} else if(winner==='o'){
			currentPlayer='o'
		} else{
		var randomPlayer = Math.random();
    	if (randomPlayer < 0.50) {
        	currentPlayer='o'
    	} else  {
        	currentPlayer='x'
		 }
		 console.log(currentPlayer);
		  }};

	
	//adds cells to boarrd
		makeBoard= function (){
		//console.log("makeBoard connected!")
		for (var i=0; i<9; i++){
			var createdDiv= $( '<div>' ).addClass('cell').attr('cell-number', i);
			
			if (i===0||i===3||i===6){
				createdDiv.addClass('row')
			}
			$( '#game' ).append(createdDiv);
			createCellObjects = new Cell([i]);
			arrayofCells.push(createCellObjects);
			//console.log ('we are looping ' + i + ' times' )
			
		};
		console.log(arrayofCells);
		function addEventsToCells() {
			$('.cell').on('click', makePlay);
		}
		addEventsToCells();
	

	},	
	


	makePlay = function (){
		console.log("Make play rules!");
	//accept argument and set value
	//the position will be qQuery attr cell-number value
	//0-9 which matches the index number of the objects
	//that are in the arrayOfCells array.
	//parseInt that value because jQuery returns it as a string
	// now able to access the objects by this.Board[value]
	//do nothing if cell has been played by...
	//do nothing if no cell in that position??

	}

	this.checkWin = function () {
		var winner;
//  cell0 | cell1 | cell2
//  ----------------------
//  cell3 | cell4 | cell5
//  ----------------------
//  cell6 | cell7 | cell8

//replace win with true or false? else return true/false????
		
		//top across win 1/9 cases
		if(cell0 === cell1 && cell0 === cell2){
			winner =cell0;
			return winner;
		}
		//top left down win 2/9 cases
		else if(cell0 === cell3 && cell0 === cell6){
			winner =cell0;
			return winner;
		}
		//top left diagnol win 3/9 cases
		else if(cell0 === cell4 && cell0 === cell8){
			winner =cell0;
			return winner;
		}
		//middle across win 4/9 cases
		else if (cell3 === cell4 && cell3 === cell5){
			winner =cell3;
			return winner;
		}
		//bottom across win 5/9 cases
		else if (cell6 === cell7 && cell6 === cell8){
			winner =cell6;
			return winner;
		}
		//middle down win 6/9 cases
		else if (cell1 === cell4 && cell1 === cell7){
			winner =cell1;
			return winner;;
		}
		//top right down win 7/9 cases
		else if (cell2 === cell5 && cell2 === cell8){
			winner =cell2;
			return winner;
		}
		//bottom left diagnol win 8/9 cases
		else if(cell6 === cell4 && cell6 === cell2){
			winner =cell6;
			return winner;		
		
		//9/9 case :must be last- checks if all cells have been played last if no match found
		}else if ( 	cell0 !=="" &&  cell0 !=="" &&  cell0 !=="" && 
					cell0 !=="" &&  cell0 !=="" &&  cell0 !=="" && 
					cell0 !=="" &&  cell0 !=="" &&  cell0 !=="" ){
			winner="noone"
			return winner;
		}
		else {console.log ("illogical conclusion-check logic again!")}
	//check if last play was a winning play
	//return a boolean 

	}
	//closing curly for Board()
};



var game ={
	//fills up with the objects from cell constructor
	gameBoard: {},
	//create a new board for the game


	//start game, show current state?
	start: function (){

	},

	//keep calling this until game is over
	play: function (position){

	}
};

function testAlert (){
	//var testing = 
	alert("another piece of the puzzle is solved!" )
}

//window onload bracket do not delete
//});
