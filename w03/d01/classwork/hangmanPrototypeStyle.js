function Letter (value){
	this.value=value;
	this.hidden=true;	
} 


//Letter.prototype.methodname = function (){};
//called by new letter.hide ()
//changes the value of this.hidden to true
Letter.prototype.hide = function () {
	this.hidden=true;
}
//changes the value of this.hidden to false 
Letter.prototype.show = function (){
	this.hidden = false;
}
//changes the value of this.
Letter.prototype.render = function (){
 if (this.hidden===true){
 	return " _ ";
 }
 else {
 	return this.value;
 }
}

//-----Word constructor
function Word (){
	this.letters=[];
}

Word.prototype.getLetters = function(newWord){
	var letters = newWord.split('');
	for (var i=0; i< letters.length; i++){
		var letterObject = new Letter(letters[i]);
		this.letters.push(lettrObject);
	}
}
//this is the win state
Word.prototype.isFound = function(){
	for (var i = 0; i< this.letters.length; i ++){
		if(this.letters[i].hidden){
			return false;
		}
	}
	return true;
}

Word.prototype.try = function(){
	var found = false;
	for (var i; i<this.letters.length; i++){
		if (this.letters[i].value ===letter){
			this.letters[i].show();
			found = true;
		}
	}
	return found;
}
Word.prototype.render = function(){
	var rendered ='';
	for (var i= 0, length= this.letter.length; i<length; i++){
		rendered += this.letters[i].render();
	}
	return rendered;
}


var game = {
	guesses: 0,
	guessedLetters : [],
	words:[],
	currentWord: '',
//initialize the game
	startGame:  function (wordsArray){
		this.guesses = 10;
		this.guessedLetters = [];
		this.words =[];
		var randomInteger =Math.floor(Math.random()*(this.words.length));
		this.currentWord = new Word();
		this.currentWord.getLetters(this.words[randomInteger]);
	},

	guess: function (letter){
		if(this.guessedLetters.indexOf(letter)===-1){
			this.currentWord.try(letter);
			this.guessedLetters.push(letter);
			this.guesses--;
		}
	},

	isOver: function () {
		return this.currentWord.isFound() || (this.guesses ===0);
	},

	overMessage: function(){
		if(this.currentWord.isFound()){

		}
	}


}

// The plan: make html page
// need input
//
// 





