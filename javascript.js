/*
Create function to get a random value between 3 choices.
*/

function getComputerChoice () {
    computerchoice = Math.floor(Math.random() * 3);
    if (computerchoice === 0) {
        return 'Rock';
    } else if (computerchoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

/* 
Create function to play one round.
Ask user for input and convert to lowercase.
compare user input with computer choice.
annouce winner. 
*/

let playerSelection = prompt('Rock, Paper or Scissors: ').toLowerCase()

function playRound (computer, player) {
    console.log(computer);
    console.log(player);
    if (computer === player) {
        return `You tie! You both picked ${computer}`;
    } else if (computer === 'rock' && player === 'scissors') {
        return `You lose! Rock beats Scissors`;
    } else if (computer === 'paper' && player === 'rock') {
        return `You lose! Paper beats Rock`;
    } else if (computer === 'scissors' && player === 'paper') {
        return `You lose! Scissors beats Paper`;
    } else if (computer === 'rock' && player === 'paper') {
        return `You Win! Paper beats Rock`;
    } else if (computer === 'scissors' && player === 'rock') {
        return `You Win! Rock beats Scissors`;
    } else if (computer === 'paper' && player === 'scissors') {
        return `You Win! Scissors beats Paper`;
    }
};

console.log(playRound (getComputerChoice().toLowerCase(), playerSelection));