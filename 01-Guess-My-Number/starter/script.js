'use strict';


// document.querySelector('.number').textContent = 22 ;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess'))


let secretNumber = Math.floor(Math.random() * 20)+1;
console.log(`the old  number is ${secretNumber}`)
let score = 20; 
let highScore = 0  ; 

document.querySelector('.check').addEventListener('click', 
function(){
const guess =Number(document.querySelector('.guess').value)
console.log(guess)

if(!guess){
document.querySelector(".message").textContent = "not a number"; 
    // when the player win 
}else if (guess === secretNumber){
    document.querySelector('.message'). textContent = "correct number";
    document.querySelector('body').style.backgroundColor = "#60b347"; 
    document.querySelector('.number').style.width = "30rem";
    document.querySelector('.number').textContent= secretNumber;
    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

    // when the player guess too high 

}else if ( guess > secretNumber){
    if(score>1){
         document.querySelector('.message').textContent = 'guess number is too high '
     score--;
     document.querySelector('.score').textContent = score;
    }else {
    document.querySelector('.message').textContent = 'you lost the game  '

    }
   

    // when the player guess too low  

}else if (guess < secretNumber){
document.querySelector('.message').textContent = 'number is too loow'
score--;
document.querySelector('.score').textContent = score;
}});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.floor(Math.random() * 20)+1;
    score = 20;
   // highScore = 0  
    console.log(`the again reset  number is ${secretNumber}`)
    document.querySelector('.score').textContent = score; 
    document.querySelector('.message').textContent = 'Start guessing...'; 
    document.querySelector('body').style.backgroundColor = " #222"; 
  document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    //document.querySelector('.highscore').textContent = highScore;
}
)