const playerCount = 0;
const computerCount = 0;

let getComputerChoice = (pick) => {
    const choice = ['rock', 'paper', 'scissors'];
    pick = Math.floor(Math.random(choice) * choice.length);
    switch (pick) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    };
};
 
let playRound = (playerSelection, computerSelection) => {
      
    if (playerSelection === computerSelection) {
        return 'Ties! Try again.';
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerCount++
        return 'You win! Rock beats Scissors.';
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerCount++
        return 'You win! Paper beats Rock.';
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerCount++
        return 'You win! Scissors beats Paper.'
    }
    else {
        computerCount++
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
};
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();

// let game = () => {
//     for (let i = 0; i < 5 ; i++) {
//         playerSelection;
    // console.log(playRound());


        // if (playerCount > computerCount){
        //     return 'You win!'
        // }
        // else if (computerCount > playerCount) {
        //     return 'You lose!'
        // }
        // else if (computerCount === playerCount) {
        //     return 'A tie!'
        // }
//     }
// };

// console.log(game())

