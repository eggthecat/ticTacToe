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

// Game.prototype.winCheck = function () {
//   if(n
//
// }

Game.prototype.turnColor = function () {

  $(".grid-container").click(function() {
    $(".grid-item").addClass("red-background");
  $(".grid-container").click(function() {
    $(".grid-item").addClass("blue-background");
  });
}



//UI logic

$(function() {

  $(".jumbotron").click(function (event) {
    event.preventDefault();

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
