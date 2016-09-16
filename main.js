//FOUND UNIT 11 VERY CHALLENGING - I RELIED HEAVILY UPON THE SOLUTIONS EXAMPLE


var cardOne = document.getElementById('cardOne').onclick = function() {
      document.getElementById('cardOne').innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"
    }

    var cardTwo = document.getElementById('cardTwo').onclick = function() {
      document.getElementById('cardTwo').innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"
    }
    
    var cardThree = document.getElementById('cardThree').onclick = function() {
      document.getElementById('cardThree').innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"
	}
    
    var cardFour = document.getElementById('cardFour').onclick = function() {
      document.getElementById('cardFour').innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"
    }
   
    var cards = ["queen" , "king" , "king" , "queen"];
    var cardsInPlay =[];

//created 2 card varieties - tested using web developer tool
//if (cardOne === cardTwo){
//alert ("You found a match!");
//} else if (cardThree === cardFour){
//alert ("You found a match!");
//} else {
//alert ("Sorry, try again.")
//}

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
//not sure if 'document.createElement(div)' is correct. possibly ('.board')??
    var newCard = document.createElement('div');
    newCard.className = 'card';
        cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	board.appendChild(newCard);
  }
};

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  //This refers to what called the function.
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') 
	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // This clear cards in play array for next try according to GA. Who knew?
    cardsInPlay = [];
	}
  }

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard ();

