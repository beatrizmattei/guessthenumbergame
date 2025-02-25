"use strict";

let number = Math.floor(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
const callMessage = function(message) {
    document.querySelector('.message').textContent = message
}
const changeBackground = function(color) {
    document.body.style.background = color;
}

document.querySelector('.checkbtn').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        callMessage("That's not a number.")
    } else if (score === 0) {
        callMessage('Game over.')
        changeBackground('red')
    } else if (number === guess) {
        callMessage('You got it!')
        changeBackground('green')
        if (score > highscore) {
            highscore = score;
        }
    } else if (number > guess) {
        callMessage("Wrong. Too low.")
        score--
    } else if(guess > number && guess < 11) {
        callMessage("Wrong. Too high.")
        score--
    } else if (guess > 10) {
        callMessage("Remember, I'm a number between 1 and 10.")
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    })
document.querySelector('.againbtn').addEventListener('click', function(){
    score = 10;
    document.querySelector('.score').textContent = score;
    number = Math.floor(Math.random() * 10) + 1;
    document.querySelector('.guess').value = '';
    callMessage("Guess me! I'm a number between 1 and 10.")
    changeBackground('black')
})
