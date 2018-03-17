
var formInput = document.querySelector(".input");
var submitBtn = document.querySelector(".guess-btn");
var clearBtn = document.querySelector(".clear-btn");
var resetBtn = document.querySelector(".reset-btn");
var randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

submitBtn.addEventListener('click', getNumber);
resetBtn.addEventListener('click', resetGame);
clearBtn.addEventListener('click', clearInput);
formInput.addEventListener('keyup', enableButtons);




function  getNumber() {

  isGuessANumber();
  formInput.focus();
};

// function resetGame() {
// }

// function clearInput() {
// }

function isGuessANumber() {
  var displayNmbr = document.querySelector(".number-display");
  var guessDetails = document.querySelector(".guess-details-display");

  if (isNaN(formInput.value)) {
    displayNmbr.innerHTML = "NaN";
    guessDetails.innerHTML = "not a number";
  } else {
    isGuessInRange()
  }
};

function isGuessInRange() {
  var guessDetails = document.querySelector(".guess-details-display");

  if (formInput.value <= 0) {
    guessDetails.innerHTML = "below the accepted range"
  } else if (formInput.value >= 101) {
    guessDetails.innerHTML = "above the accepted range"
  } else {
    isGuessToHighToLow()
  }
};

function isGuessToHighToLow() {
  var guessDetails = document.querySelector(".guess-details-display");

  if (formInput.value < randomNumber) {
    guessDetails.innerHTML = "TOO LOW!"
  } else if (formInput.value > randomNumber) {
    guessDetails.innerHTML = "TOO HI!"
  } else {
    guessDetails.innerHTML = "OH SNAP!"
  }
};

function enableButtons() {

  if (formInput.value === '') {
    submitBtn.disabled = true
    clearBtn.disabled = true
    resetBtn.disabled = true
    } else {
    submitBtn.disabled = false
    clearBtn.disabled = false
    resetBtn.disabled = false
  } 
};

function disableButtons() {
  submitBtn.disabled = true;
  clearBtn.disabled = true;
};

function clearInput() {
  formInput.value = '';
  disableButtons()
};

function resetGame() {
  location.reload();
};


