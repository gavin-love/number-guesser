mainGame();

function mainGame() {

  alert(
  '1. The goal is to guess the random number.\n2. The range starts out at 1 to 100.\n3. Everytime you win the minimum range extends by -10.\n4. Everytime you win the Maximum range extends by +10.\n5. After winning the game 3 times you will enter a bonus game.\n6. Choose your own range to start the bonus game.\n7. Repeat steps 1 through 4 starting with the custom range you entered.\n8. After winning the custom game 3 times you win the game.'
  );

  var formInput = document.querySelector(".input");
  var submitBtn = document.querySelector(".guess-button");
  var clearBtn = document.querySelector(".clear-button");
  var resetBtn = document.querySelector(".reset-button");
  var enableBtns = document.querySelectorAll(".enable-buttons");
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
    placeholderMin -= 10;
    placeholderMax += 10;
    belowRange -= 10;
    aboveRange += 10;
    min = min-10;
    max = max+10;
    wins++;
    if (wins < 3) {
      generateRandomNumber(min,max)
    } else {
      customGame();
    }
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
    var lastGuessText = document.querySelector(".last-guess-text");
    var guessDetails = document.querySelector(".guess-details-display");

    formInput.value = '';
    formInput.focus();
    disableButtons();
  };

  function resetGame() {
    location.reload();
  };
};

function customGame() {

    alert(
  '1. The goal is to guess the random number.\n2. The range starts out at 1 to 100.\n3. Everytime you win the minimum range extends by -10.\n4. Everytime you win the Maximum range extends by +10.\n5. After winning the game 3 times you will enter a bonus game.\n6. Choose your own range to start the bonus game.\n7. Repeat steps 1 through 4 starting with the custom range you entered.\n8. After winning the custom game 3 times you win the game.'
  );
    
  var formInput = document.querySelector(".input");
  var customMinInput = document.querySelector(".custom-min-input");
  var customMaxInput = document.querySelector(".custom-max-input");
  // var parsed = parseInt(customMaxInput.value);
  var submitBtn = document.querySelector(".guess-button");
  var clearBtn = document.querySelector(".clear-button");
  var resetBtn = document.querySelector(".reset-button");
  var enableBtns = document.querySelectorAll(".enable-buttons");
  var customRangeSubmitBtn = document.querySelector(".custom-range-submit-button");
  var hiddenDisplay = document.querySelectorAll(".hidden-display");
  
  var randomNumber = 0;
  var min = 0;
  var max = 0;
  var wins = 0;

  submitBtn.addEventListener('click', getNewNumber);
  resetBtn.addEventListener('click', resetGame);
  clearBtn.addEventListener('click', clearInput);
  formInput.addEventListener('keyup', enableButtons);
  customRangeSubmitBtn.addEventListener('click', customRangeFunction);

  enableCustomGame();

  function enableCustomGame() {
    var lastGuessText = document.querySelector(".last-guess-text");
    var displayNmbr = document.querySelector(".number-display");
    var guessDetails = document.querySelector(".guess-details-display");

    for (var i = 0; i < hiddenDisplay.length; i++) {
      hiddenDisplay[i].style = "display: visible";
      customRangeSubmitBtn.disabled = false;
      lastGuessText.innerHTML = "Choose your own range";
      formInput.value = "Win!";
      guessDetails.innerHTML = "above!";
    };
  };

  function customRangeFunction() {
    var guessDetails = document.querySelector(".guess-details-display");
    var lastGuessText = document.querySelector(".last-guess-text");
    
    min = customMinInput.value;
    var preparsedMax = customMaxInput.value;
    max = Number.parseInt(preparsedMax);


    for (var i = 0; i < hiddenDisplay.length; i++) {
      hiddenDisplay[i].style = "display: none";
      customRangeSubmitBtn.disabled = true;
    };

      lastGuessText.innerHTML = "the range is now " + min + " to " + max;
      guessDetails.innerHTML = "WINNER!";
      formInput.placeholder = "Guess a number between " + min + " and " + max;

      generateRandomNumber(min,max);
      clearInput();

  };

  function  getNewNumber() {
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
      isGuessInRange();
    }
  };

  function isGuessInRange() {
    var guessDetails = document.querySelector(".guess-details-display");

    if (formInput.value < min) {
      guessDetails.innerHTML = "below the accepted range"
    } else if (formInput.value > max) {
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
      levelUp(); 
    }
  };

  function levelUp() {
    var guessDetails = document.querySelector(".guess-details-display");
    var lastGuessText = document.querySelector(".last-guess-text")
    min = min-10;
    max = max+10;
    wins++;

    lastGuessText.innerHTML = "the range is now " + min + " to " + max;
    guessDetails.innerHTML = "WINNER!";
    formInput.placeholder = "Guess a number between " + min + " and " + max;

    if (wins < 3) {
      generateRandomNumber(min,max);
    } else {
      gameOver();
      lastGuessText.innerHTML = "!!!!!!!"
      guessDetails.innerHTML = "!!!!!!!";
      formInput.value = "YES"
    }
  };

  function generateRandomNumber(min,max) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNumber);
  };

  function enableButtons() {
    for (i = 0; i < enableBtns.length; i++) {

    if (formInput.value === '') {
      enableBtns[i].disabled = true;
      } else {
      enableBtns[i].disabled = false;
      };
    };
  };

  function disableButtons() {
    submitBtn.disabled = true;
    clearBtn.disabled = true;
  };

  function clearInput() {
    var lastGuessText = document.querySelector(".last-guess-text");
    var guessDetails = document.querySelector(".guess-details-display");

    formInput.value = '';
    formInput.focus();
    disableButtons();
  };

  function resetGame() {
    location.reload();
  };

  function gameOver() {
    class Progress {
      constructor(param = {}) {
        this.timestamp        = null;
        this.duration         = param.duration || Progress.CONST.DURATION;
        this.progress         = 0;
        this.delta            = 0;
        this.progress         = 0;
        this.isLoop           = !!param.isLoop;

        this.reset();
      }

      static get CONST() {
        return {
          DURATION : 1000
        };
      }

      reset() {
        this.timestamp = null;
      }

      start(now) {
        this.timestamp = now;
      }

      tick(now) {
        if (this.timestamp) {
          this.delta    = now - this.timestamp;
          this.progress = Math.min(this.delta / this.duration, 1);

          if (this.progress >= 1 && this.isLoop) {
            this.start(now);
          }

          return this.progress;
        } else {
          return 0;
        }
      }
    }

    class Confetti {
      constructor(param) {
        this.parent         = param.elm || document.body;
        this.canvas         = document.createElement("canvas");
        this.ctx            = this.canvas.getContext("2d");
        this.width          = param.width  || this.parent.offsetWidth;
        this.height         = param.height || this.parent.offsetHeight;
        this.length         = param.length || Confetti.CONST.PAPER_LENGTH;
        this.yRange         = param.yRange || this.height * 2;
        this.progress       = new Progress({
          duration : param.duration,
          isLoop   : true
          });
        this.rotationRange  = typeof param.rotationLength === "number" ? param.rotationRange
                                                                       : 10;
        this.speedRange     = typeof param.speedRange     === "number" ? param.speedRange
                                                                       : 10;
        this.sprites        = [];

        this.canvas.style.cssText = [
          "display: block",
          "position: absolute",
          "top: 0",
          "left: 0",
          "pointer-events: none"
        ].join(";");

        this.render = this.render.bind(this);

        this.build();

        this.parent.appendChild(this.canvas);
        this.progress.start(performance.now());

        requestAnimationFrame(this.render);
      }

      static get CONST() {
        return {
            SPRITE_WIDTH  : 9,
            SPRITE_HEIGHT : 16,
            PAPER_LENGTH  : 100,
            DURATION      : 8000,
            ROTATION_RATE : 50,
            COLORS        : [
              "#EF5350",
              "#EC407A",
              "#AB47BC",
              "#7E57C2",
              "#5C6BC0",
              "#42A5F5",
              "#29B6F6",
              "#26C6DA",
              "#26A69A",
              "#66BB6A",
              "#9CCC65",
              "#D4E157",
              "#FFEE58",
              "#FFCA28",
              "#FFA726",
              "#FF7043",
              "#8D6E63",
              "#BDBDBD",
              "#78909C"
            ]
        };
      }

      build() {
        for (let i = 0; i < this.length; ++i) {
          let canvas = document.createElement("canvas"),
              ctx    = canvas.getContext("2d");

          canvas.width  = Confetti.CONST.SPRITE_WIDTH;
          canvas.height = Confetti.CONST.SPRITE_HEIGHT;

          canvas.position = {
            initX : Math.random() * this.width,
            initY : -canvas.height - Math.random() * this.yRange
          };

          canvas.rotation = (this.rotationRange / 2) - Math.random() * this.rotationRange;
          canvas.speed    = (this.speedRange / 2) + Math.random() * (this.speedRange / 2);

          ctx.save();
            ctx.fillStyle = Confetti.CONST.COLORS[(Math.random() * Confetti.CONST.COLORS.length) | 0];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.restore();

          this.sprites.push(canvas);
        }
      }

      render(now) {
        let progress = this.progress.tick(now);

        this.canvas.width  = this.width;
        this.canvas.height = this.height;

        for (let i = 0; i < this.length; ++i) {
          this.ctx.save();
            this.ctx.translate(
              this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
              this.sprites[i].position.initY + progress * (this.height + this.yRange)
            );
            this.ctx.rotate(this.sprites[i].rotation);
            this.ctx.drawImage(
              this.sprites[i],
              -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2,
              -Confetti.CONST.SPRITE_HEIGHT / 2,
              Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
              Confetti.CONST.SPRITE_HEIGHT
            );
          this.ctx.restore();
        }

        requestAnimationFrame(this.render);
      }
    }

    (() => {
      const DURATION = 8000,
            LENGTH   = 120;

      new Confetti({
        width    : window.innerWidth,
        height   : window.innerHeight,
        length   : LENGTH,
        duration : DURATION
      });

      setTimeout(() => {
        new Confetti({
          width    : window.innerWidth,
          height   : window.innerHeight,
          length   : LENGTH,
          duration : DURATION
        });
      }, DURATION / 2);
    })();
    }
  };


