var formInput = document.querySelector(".input");
var cyoaInputs = document.querySelectorAll(".cyoa-inputs")

var submitBtn = document.querySelector(".guess-button");
var clearBtn = document.querySelector(".clear-button");
var resetBtn = document.querySelector(".reset-button");
var enableBtns = document.querySelectorAll(".enable-buttons");
var cyoaBtn = document.querySelector(".cyoa-button");

var hiddenDisplay = document.querySelectorAll(".hidden-display")

var belowRange = 0;
var aboveRange = 101;
var min = 1;
var max = 100;
var placeholderMin = -9;
var placeholderMax = 110;
var wins = 0;

var randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber);

submitBtn.addEventListener('click', getNumber);
resetBtn.addEventListener('click', resetGame);
clearBtn.addEventListener('click', clearInput);
formInput.addEventListener('keyup', enableButtons);
cyoaBtn.addEventListener('click', customRangeFunction);

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
  wins++;
  if (wins < 1) {
    generateRandomNumber(min,max)
  } else {
    enableCustomGame()
  }
};

function enableCustomGame() {
  var lastGuessText = document.querySelector(".last-guess-text")

  for (var i = 0; i < hiddenDisplay.length; i++) {
    hiddenDisplay[i].style = "display: visible";
    cyoaBtn.disabled = false;
    lastGuessText.innerHTML = "Your last guess was"
    formInput.placeholder = ''
  }
};

function customRangeFunction() {
  var guessDetails = document.querySelector(".guess-details-display");
  var lastGuessText = document.querySelector(".last-guess-text")

  for (var i = 0; i < cyoaInputs.length; i++) {
    var min = cyoaInputs[0].value;
    var max = cyoaInputs[1].value;
    placeholderMin = min;
    placeholderMax = max;
    belowRange = min;
    aboveRange = max;
  };
    lastGuessText.innerHTML = "the range is now " + placeholderMin + " to " + placeholderMax;
    guessDetails.innerHTML = "WINNER!";
    formInput.placeholder = "Guess a number between " + placeholderMin + " and " + placeholderMax;

  generateRandomNumber(min,max);
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

  // lastGuessText.innerHTML = "Your last guess was"
  formInput.value = '';
  formInput.focus();
  disableButtons();
};

function resetGame() {
  location.reload();
};

