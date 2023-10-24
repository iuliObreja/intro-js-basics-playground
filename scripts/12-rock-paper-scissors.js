
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();


let isAutoPlaying = false;
let intervalId;

// Acces to all buttons 
document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    showResetConfirmation();
  });
//


  // Play The Game on keydown (r - p - s - a - Backspace)
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    showResetConfirmation();
  }
});

 // Play The Game (by Player Move)
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You 
      <img src="./images/${playerMove}-emoji.png" alt="a move from rock-paper-scissors" class="move-icon"/> 
      <img src="./images/${computerMove}-emoji.png" alt="a move from rock-paper-scissors" class="move-icon" /> 
                Computer`;
};

// Computer Move
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
};

// Reset score confirmation button acces
const confirmationMessageElement = document.querySelector('.js-confirmation-reset-score');
confirmationMessageElement.innerHTML = '';

const yesButtonElement = document.querySelector('.js-yes-button');
const noButtonElement = document.querySelector('.js-no-button');

function removeTextAddClass() {
  confirmationMessageElement.innerHTML = '';
  yesButtonElement.classList.add('js-yes-button');
  noButtonElement.classList.add('js-no-button');
};
//

function showResetConfirmation() {
  confirmationMessageElement.innerHTML = 'Are you sure you want to reset the score?';

  if (confirmationMessageElement.innerHTML) {
    yesButtonElement.classList.remove('js-yes-button');
    noButtonElement.classList.remove('js-no-button');
   }

  // If click Yes
  yesButtonElement.addEventListener('click', ()=> {
    resetScore();
    removeTextAddClass();
  });

  // If click No
  noButtonElement.addEventListener('click', () => {
    removeTextAddClass();
    updateScoreElement();
  })
};

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
};

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      playGame(pickComputerMove());
    }, 1000);

    isAutoPlaying = true;
    
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Stop Playing';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Auto Play';
  }
};

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

