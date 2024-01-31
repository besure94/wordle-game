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

function insertLetter(pressedKey) {
  // check that there is space in the guess for this letter
  if (nextLetter == 5) {
    return;
  }

  // turn key into lower case
  pressedKey = pressedKey.toLowerCase();

  // find the appropriate row and insert the selected letter into the box
  let letterRow = document.getElementsByClassName("letterRow")[6 - remainingGuesses];
  let letterBox = letterRow.children[nextLetter];
  letterBox.textContent = pressedKey;
  letterBox.classList.add("filledBox");
  currentGuess.push(pressedKey);
  nextLetter += 1;
}

function deleteLetter() {
  // find the correct row, find the last box and delete it, and reset the nextLetter counter
  let letterRow = document.getElementsByClassName("letterRow")[6 - remainingGuesses];
  let letterBox = letterRow.children[nextLetter - 1];
  letterBox.textContent = "";
  letterBox.classList.remove("filledBox");
  currentGuess.pop();
  nextLetter -= 1;
}

// work in progress function
function checkGuess() {
  let letterRow = document.getElementsByClassName("letterRow")[6 - remainingGuesses];
  let guessString = "";
  let rightGuess = Array.from(rightGuessString);

  for (const val of currentGuess) {
    guessString += val;
  }

  if (guessString.length != 5) {
    alert("Not enough letters!");
    return;
  }

  if (!words.includes(guessString)) {
    alert("Word not in list!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    let letterColor = "";
    let letterBox = letterRow.children[i];
    let letter = currentGuess[i];

    let letterPosition = rightGuess.indexOf(currentGuess[i]);
  }
}

window.addEventListener("load", function(event) {
  event.preventDefault();
  createGameBoard();
  document.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (remainingGuesses == 0) {
      return;
    }

    let pressedKey = String(e.key);
    if (pressedKey == "Backspace" && nextLetter !== 0) {
      deleteLetter()
      return;
    }

    if (pressedKey == "Enter") {
      checkGuess()
      return;
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
      return;
    } else {
      insertLetter(pressedKey);
    }
  });
});