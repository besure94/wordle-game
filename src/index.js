import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { words } from "./words.js";

// create global game variables
const numberOfGuesses = 6;
let remainingGuesses = numberOfGuesses;
let currentGuess = [];
let nextLetter = 0;
let correctGuess = words[Math.floor(Math.random() * words.length)];
console.log(correctGuess);
console.log(remainingGuesses);
console.log(currentGuess);
console.log(nextLetter);

// create the game board to display to the user
function createGameBoard() {
  const gameBoard = document.getElementById("gameBoard");

  // create a row for each guess and group with them with a class name
  for (let i = 0; i < numberOfGuesses; i++) {
    let guessRow = document.createElement("div");
    guessRow.className = "letterRow";

    // create a box for each letter and add them to the div with the rows
    for (let i = 0; i < 5; i++) {
      let guessBox = document.createElement("div");
      guessBox.className = "letterBox";
      guessRow.appendChild(guessBox);
    }

    // add the div with the rows to the game board
    gameBoard.appendChild(guessRow);
  }
}

window.addEventListener("load", function(event) {
  event.preventDefault();
  createGameBoard();
});