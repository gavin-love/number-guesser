var formInput = document.querySelector(".input");
var submitBtn = document.querySelector(".guess-button");
var clearBtn = document.querySelector(".clear-button");
var resetBtn = document.querySelector(".reset-button");
var enableBtns = document.querySelectorAll(".enable-buttons")
var belowRange = 0;
var aboveRange = 101;
var min = 1;
var max = 100;
var placeholderMin = -9
var placeholderMax = 110
var randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber);

submitBtn.addEventListener('click', getNumber);
resetBtn.addEventListener('click', resetGame);
clearBtn.addEventListener('click', clearInput);
formInput.addEventListener('keyup', enableButtons);

function  getNumber() {
  var displayNmbr = document.querySelector(".number-display");

  isGuessANumber();
  displayNmbr.innerHTML = formInput.value;
  formInput.focus();
};

function isGuessANumber() {
  var guessDetails = document.querySelector(".guess-details-display");

  if (isNaN(formInput.value)) {
    guessDetails.innerHTML = "not a number"
  } else {
    isGuessInRange(belowRange,aboveRange)
  }
};

function isGuessInRange() {
  var guessDetails = document.querySelector(".guess-details-display");

  if (formInput.value <= belowRange) {
    guessDetails.innerHTML = "below the accepted range"
  } else if (formInput.value >= aboveRange) {
    guessDetails.innerHTML = "above the accepted range"
  } else {
    isGuessToHighToLow()
  }
};

function isGuessToHighToLow() {
  var guessDetails = document.querySelector(".guess-details-display");
  var lastGuessText = document.querySelector(".last-guess-text")

  if (formInput.value < randomNumber) {
    guessDetails.innerHTML = "TOO LOW!"
  } else if (formInput.value > randomNumber) {
    guessDetails.innerHTML = "TOO HI!"
  } else {
    lastGuessText.innerHTML = "the range is now " + placeholderMin + " to " + placeholderMax;
    guessDetails.innerHTML = "WINNER!";
    formInput.placeholder = "Guess a number between " + placeholderMin + " and " + placeholderMax;
    levelUp(); 
  }

};

function levelUp() {
  placeholderMin = placeholderMin-10;
  placeholderMax = placeholderMax+10;
  belowRange = belowRange-10;
  aboveRange = aboveRange+10;
  min = min-10;
  max = max+10;

  generateRandomNumber(min,max)
};

function generateRandomNumber(min,max) {
   randomNumber = Math.floor(Math.random() * (max - min) + min);
   console.log(randomNumber);
};

function enableButtons() {
  for (i = 0; i < enableBtns.length; i++) {

    if (formInput.value === '') {
      enableBtns[i].disabled = true
      } else {
      enableBtns[i].disabled = false
    }
  } 
};

function disableButtons() {
  submitBtn.disabled = true;
  clearBtn.disabled = true;
};

function clearInput() {
  var lastGuessText = document.querySelector(".last-guess-text")
  var guessDetails = document.querySelector(".guess-details-display");

  lastGuessText.innerHTML = "Your last guess was"
  formInput.value = '';
  formInput.focus();
  disableButtons();
};

function resetGame() {
  location.reload();
};

