'use strict';
const diceImg = document.querySelector('.dice');
const scoreP1 = document.getElementById('score--0');
scoreP1.textContent = 0;
const scoreP2 = document.getElementById('score--1');
scoreP2.textContent = 0 ;


diceImg.classList.add('hide');
const clickRollBtn = document.querySelector('.btn--roll')
let currentScore = 0;
let activePlayer = 0 ; 

clickRollBtn.addEventListener('click', function(){
const randomNumberDice = Math.trunc(Math.random() * 6) + 1;
diceImg.src = `dice-${randomNumberDice}.png`;
diceImg.classList.remove('hide')

if( randomNumberDice !==1){
// add dice to the current score
currentScore += randomNumberDice;
console.log(` the current score for this player is${currentScore}`)
document.getElementById(`current--${activePlayer}`).textContent = currentScore;


}else {
    
console.log('now we are in the other player')
    //change the player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer=== 0 ? 1:0 ;
    console.log(activePlayer) 
     document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

}



})


































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

