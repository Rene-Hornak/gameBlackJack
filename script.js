let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const gameButton = document.querySelector("#gameButton");

gameButton.onclick = startGame;

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You have got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }
    console.log(message);
}