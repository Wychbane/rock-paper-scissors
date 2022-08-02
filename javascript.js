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

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const outcome = document.createElement('div');


let playerWin = 0;
let computerWin = 0;
let gamePlayed = 0;

function playRound (player, computer=getComputerChoice()) {
    if (computer === player) {
        return `You tie! You both picked ${computer}`; 
    } else if (computer === 'rock' && player === 'scissors') {
        computerWin++;
        return `You Lose! Rock beats Scissors`;
    } else if (computer === 'paper' && player === 'rock') {
        computerWin++;
        return `You Lose! Paper beats Rock`;
    } else if (computer === 'scissors' && player === 'paper') {
        computerWin++;
        return `You Lose! Scissors beats Paper`;
    } else if (computer === 'rock' && player === 'paper') {
        playerWin++;
        return `You Win! Paper beats Rock`;
    } else if (computer === 'scissors' && player === 'rock') {
        playerWin++;
        return `You Win! Rock beats Scissors`;
    } else if (computer === 'paper' && player === 'scissors') {
        playerWin++;
        return `You Win! Scissors beats Paper`;
    }
};

// Get player pick and run game.
buttons.forEach((button) => {
        button.addEventListener('click' , () => {
            let round = playRound(button.className);
            game(round);
        });
    });

function game(playRound){
    score(playRound);
    if (computerWin === 5 || playerWin === 5){
        score(playRound);
        gameOver();
    } 
}

function score(result) {
    let scoreBoard = `Player: ${playerWin} | Computer: ${computerWin}`;
    outcome.textContent = scoreBoard;
    div.textContent = result;
    div.appendChild(outcome); 
}

function stateResult(){
    if (playerWin > computerWin) {
        return `You won the game ${playerWin} : ${computerWin}.`
    } else {
        return `You lost the game ${playerWin} : ${computerWin}.`
    }
}

function gameOver() {
    alert(stateResult()); 
    playerWin = 0;
    computerWin = 0;
    div.textContent = '';
}
