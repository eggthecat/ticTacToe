//business logic

function Game(player1, player2, turn) {
  this.player1 = player1,
  this.player2 = player2,
  this.turn = ['x','o']
// this.wins = wins
}

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
var plays2 = new Players( 'Thank you', 'Todd', 'o');

    //change player turn
Players.prototype.changeTurn = function() {
	if (this.playTurn === 'x') {
		this.playTurn = 'o';
    } else {
		this.playTurn = 'x';
    }
}

var ourGame = new Players(player1Input, player2Input);

Players.prototype.whoseHere = function () {
  console.log(player1Input);
  console.log(player2Input);
}

//
//
// Game.prototype.turnColor = function () {
//
//   $(".grid-container").click(function() {
//     $(".grid-item").addClass("red-background");
//   });
//   $(".grid-container").click(function() {
//     $(".grid-item").addClass("blue-background");
//   });
// }

//UI logic

$(function() {

  $(".jumbotron").click(function (event) {
    event.preventDefault();

    //get user names for player1 and player2
    $(".userName").click(function() {
      var player1Input = $("#player1").val();
      console.log(player1Input);
      var player2Input = $("#player2").val();
      console.log(player2Input);
    });

    $("#topLeft").click(function() {
      $(".grid-item").turnColor();
    });

    ourGame.whoseHere();

    $("#restartBtn").click(function() {
      $(".grid-container").clear();
    });


  });
});
