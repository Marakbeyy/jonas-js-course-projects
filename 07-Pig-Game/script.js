'use strict';

// 1. Selecting Elements
const diceImg = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNewGame = document.querySelector('.btn--new')

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// 2. Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add('hide'); // Ensure this matches your CSS ('hidden' or 'hide')

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//  THE switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  
  currentScore = 0;
  
  // Switch the active player (0 to 1, or 1 to 0)
  activePlayer = activePlayer === 0 ? 1 : 0;
  
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// reset the game
const newGame = function(){
    currentScore =0; 
   scores = [0, 0];
   activePlayer = 0 ;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;
    diceImg.classList.add('hide'); // Ensure this matches your CSS ('hidden' or 'hide')
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

}

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImg.classList.remove('hide');
  diceImg.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // If we roll a 1, call the switch function
    switchPlayer();
  }
});

// 5. Holding Score Logic
btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's total
  scores[activePlayer] += currentScore;
  
  // 2. Update the UI total score
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  // 3. Check if player won (Score >= 100)
  if (scores[activePlayer] >= 20) { 
      console.log(`Player ${activePlayer + 1} wins!`);
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

  } else {
      // 4. Switch to the next player
      switchPlayer();
  }
});

btnNewGame.addEventListener('click', newGame)




























// const score0 = document.getElementById('score--0');
// const score1 = document.getElementById('score--1');
// let currentScoreP1 = document.getElementById('current--0') 
// const currentScoreP2 = document.getElementById('current--1') 

// score0.textContent = 0;
// score1.textContent = 0;
// const diceImg = document.querySelector('.dice')
// const rollDice = document.querySelector('.btn--roll')
// diceImg.classList.add('hide')
// const player0 = document.querySelector('.player--0')
// const player1 = document.querySelector('.player--1')


// let currentScore = 0 ;
// let activePlayer = 0 ;
//  console.log(`the first player is now is ${activePlayer}`)




// rollDice.addEventListener('click', function(){
// diceImg.classList.remove('hide')
// const randomNumber = Math.trunc(Math.random() * 6) + 1;
// diceImg.src = `dice-${randomNumber}.png`;

// if (randomNumber !== 1){
//      // add dice to current score
//      currentScore += randomNumber ;
//   let  player = document.getElementById(`current--${activePlayer}`)
//   player.textContent = currentScore

// }else {
//     //switch to the other player
//     currentScore = 0;
//     let player= document.getElementById(`current--${activePlayer}`)
//     player.textContent = currentScore;
//     activePlayer = activePlayer === 0 ? 1 : 0

//     console.log(`the new  player is ${activePlayer}`)
//         player0.classList.toggle('player--active');
//         player1.classList.toggle('player--active');


// }

// })

