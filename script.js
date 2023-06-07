let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageText = document.querySelector("#message");
const cardText = document.querySelector("#card");
const summarizeText = document.querySelector("#summarize");
const gameButton = document.querySelector("#gameButton");
const cardButton = document.querySelector("#newCardButton");

gameButton.onclick = startGame;
cardButton.onclick = newCard;

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardText.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardText.textContent += cards[i] + " ";                
    }
    summarizeText.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You have got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }
    messageText.textContent = message;
}

function newCard() {
    let card = randomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}