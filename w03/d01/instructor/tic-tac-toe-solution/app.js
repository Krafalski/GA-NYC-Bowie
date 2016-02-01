// '', 'X', 'O'

function Cell() {
    this.value  = '';

    this.setState = function(value) {
        this.value = value;
    };

    this.playable = function() {
        if (this.value === '') {
            return true;
        } else {
            return false;
        }
    };
};

function Board() {
    this.cells = [];
    this.currentPlayer = '';
    this.winner = '';

    this.startGame = function() {
        for(var i = 0; i < 3; i++) {
            var row = [];
            for(var j = 0; j < 3; j++) {
                var cell = new Cell();
                row.push(cell);
            }
            this.cells.push(row);
        }
        
        this.currentPlayer = 'X';        
    };

    this.makePlay = function(x, y) {
        if (this.cells[x][y].playable()) {
            this.cells[x][y].setState(this.currentPlayer);
            var oldPlayerThatJustMoved =  this.currentPlayer;
            if (this.currentPlayer === 'X') {
                this.currentPlayer = 'O';
            } else {
                this.currentPlayer = 'X';               
            }
            return oldPlayerThatJustMoved;
        }
        return '';
    };

    this.checkWin = function() {
        console.log('Called win');
        if (this.check1()) {
            return true;
        } else {
            return false;
        }
    };

    this.check1 = function() {
        if (this.cells[0][0] !== ''){
            console.log('not empty');
            console.log(this.cells);
            if ((this.cells[0][0].value === this.cells[0][1].value) &&
                (this.cells[0][0].value === this.cells[0][2].value)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }       
    };
};

var game = {
    board: '',

    makeBoard: function() {
        this.board = new Board();
    },

    start: function() {
        this.makeBoard();
        this.board.startGame();
        console.log(this.board.cells);
    },

    play: function(x, y) {
        var playerThatMoved = this.board.makePlay(x, y);
        return playerThatMoved;
    }
};

$(function () {
    console.log('linked');
    game.start();
    
    function buildTable() {
        var $table = $('<table>');
        
        function handler(evt) {
            var id = $(evt.target).attr('id'); // x-y
            var x = id[0];
            var y = id[2];
            var playerThatMoved = game.play(x, y); //'x', 'O', ''
            $(evt.target).addClass(playerThatMoved);
            if (game.board.checkWin()) {
                console.log('You Won');
            }
        }
        
        for(var x = 0; x < 3; x++) {
            var $row = $('<tr>');
            for(var y = 0; y < 3; y++) {
                var $cell = $('<td>');
                $cell.attr('id', x + '-' + y);
                $cell.on('click', handler);
                $row.append($cell);
            }
            $table.append($row);
        }

        return $table;        
    }

    var $gameContainer = $('.game-container');
    $gameContainer.append(buildTable());
});
