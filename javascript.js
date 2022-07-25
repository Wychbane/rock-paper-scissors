/*
Create function to get a random value between 3 choices.
*/

function getComputerChoice () {
    computerchoice = Math.floor(Math.random() * 3);
    if (computerchoice === 0) {
        return 'rock';
    } else if (computerchoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

/* 
Create function to play one round.
Ask user for input and convert to lowercase.
compare user input with computer choice.
annouce winner. 
*/


function playRound (computer, player) {
    if (computer === player) {
        return `You tie! You both picked ${computer}`;
    } else if (computer === 'rock' && player === 'scissors') {
        return `You Lose! Rock beats Scissors`;
    } else if (computer === 'paper' && player === 'rock') {
        return `You Lose! Paper beats Rock`;
    } else if (computer === 'scissors' && player === 'paper') {
        return `You Lose! Scissors beats Paper`;
    } else if (computer === 'rock' && player === 'paper') {
        return `You Win! Paper beats Rock`;
    } else if (computer === 'scissors' && player === 'rock') {
        return `You Win! Rock beats Scissors`;
    } else if (computer === 'paper' && player === 'scissors') {
        return `You Win! Scissors beats Paper`;
    }
};

/*
Create a function to play 5 rounds
Create a for loop. 
Count number of wins of each
Output the winner at the end
*/

function game() {
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors: ').toLowerCase()
        let result = playRound(getComputerChoice(), playerSelection);
        console.log(`Game ${i + 1}/5 ${result}`)
        if ((result.slice(0, 8)) === 'You Win!') {
            playerWin++
        } else if (result.slice(0, 8) === 'You Lose') {
            computerWin++
        }
    }
    if (playerWin === computerWin) {
        return `It's a Tie.`
    } else if (playerWin > computerWin) {
        return `You won the game ${playerWin} : ${computerWin}.`
    } else {
        return `You lost the game ${playerWin} : ${computerWin}.`
    }
}

console.log(game());
