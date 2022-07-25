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
}

getComputerChoice ()
console.log(getComputerChoice())

/* 
Create function to play one round.
Ask user for input and convert to lowercase.
compare user input with computer choice.
annouce winner. 
*/

let playerSelection = prompt('Rock, Paper or Scissors: ').toLowerCase()
