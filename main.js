//created 2 card varieties - tested using web developer tool
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

//if (cardOne === cardTwo){
//alert ("You found a match!");
//} else if (cardThree === cardFour){
//alert ("You found a match!");
//} else {
//alert ("Sorry, try again.")
//}

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<c4; i++) {

//not sure if 'document.createElement(div)' is correct. possibly ('.board')??
    var newCard = document.createElement('div');
    newCard.className = 'card';

    board.appendChild(newCard);
  }

};