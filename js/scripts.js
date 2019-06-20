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


Player.prototype.
// Game.prototype.winCheck = function () {
//   if(n
//
// }

var testPlayer = new Player("X");
testPlayer.mark(); // returns "X"

var board = new Board();
var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object

testSpace.xCoordinate(); // returns 1
testSpace.yCoordinate(); // returns 2

testSpace.mark(testPlayer);
testSpace.markedBy(); // returns testPlayer or "X"

board.gameOver()



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
      $(".grid-item").addClass("red-background");
    });



    // $(player1).click(function() {
    //   $(" ").addClass("Red-background");
    // });
    // $(player2).click(function() {
    //   $(" ").addClass("Blue-background");
    // });
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
