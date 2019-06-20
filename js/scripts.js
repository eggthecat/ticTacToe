//business logic


function Game(player1, player2, turn) {
  this.player1 = player1,
  this.player2 = player2,
  this.turn = ['x','o']
// this.wins = wins
}
//clickColor
// if(#topLeft).click() {
//
// }

Game.prototype.switch = function () {
  if(turn[0]) {
    this.turn = player2;
  } else {
    this.turn = player1;
  }
}

function Players(player1, player2, playTurn) {
	this.player1 = 'x';
	this.player2 = 'o';
	this.playTurn = 'x';
}

    //change player turn
Players.prototype.changeTurn = function() {
	if (this.playTurn === 'x') {
		this.playTurn = 'o';
    } else {
		this.playTurn = 'x';
    }
}



var plays2 = new Player( 'Thank you', 'Todd', 'o');



// Game.prototype.winCheck = function () {
//   if(n
//
// }

// testPlayer.mark(); // returns "X"

// var board = new Board();
// var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object
//
// testSpace.xCoordinate(); // returns 1
// testSpace.yCoordinate(); // returns 2
//
// testSpace.mark(testPlayer);
// testSpace.markedBy(); // returns testPlayer or "X"
//
// board.gameOver()

Game.prototype.turnColor = function () {

  $(".grid-container").click(function() {
    $(".grid-item").addClass("red-background");
  $(".grid-container").click(function() {
    $(".grid-item").addClass("blue-background");
  });
});



//UI logic

$(function() {

  $(".jumbotron").click(function (event) {
    event.preventDefault();

    //get user names for player1 and player2
    $(".userName").click(function() {
      var player1Input = $("#player1").val();
      console.log(player1Input);
      var player2Input = $("#player2").val();
      console.log(player2Input)
    });

    $("#topLeft").click(function() {
      $(".grid-item").turnColor();
    });



    $("#restartBtn").click(function() {
      $(".grid-container").clear();
    });

    // var turn = player1;
    // turn.switch();
    // console.log(turn)
    var ourGame = new Game("Dom", "Hannah", ["x"]);
    console.log(ourGame.player1);
    console.log(ourGame.player2);
  });



});
