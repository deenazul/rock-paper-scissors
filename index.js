// select btn on html
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

let getComputerChoice = (pick) => {
    const choice = ["rock", "paper", "scissors"];
    pick = Math.floor(Math.random(choice) * choice.length);
    switch (pick) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    };
};
    
let checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

let playRound = (playerSelection, computerSelection) => {
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner == "Tie") {
        return 'Ties! Try again.';
    }
    else if (winner == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
};

// create 3 buttons and call playRound with its correct playerSelection
    btnRock.addEventListener("click", () => {
        if (game()){
            playRound("rock", getComputerChoice());
        }
        else {
            console.log("error")
        }  
    })

    btnPaper.addEventListener('click', () => {
        if (game()){
            playRound("paper", getComputerChoice());
        }else {
            console.log("error")
        }
    })
    btnScissors.addEventListener('click', () => {
        if (game()){
            playRound("scissors", getComputerChoice());
        }else {
            console.log("error")
        }
    })

let game = () => {
    let playerCount = 0;
    let computerCount = 0;
    let playerSelection;
    let computerSelection = getComputerChoice();
    
    // for (let i = 0; i < 5 ; i++) {
        // const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        // playerSelection = getUserChoice();
        // computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerCount++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            computerCount++;
        }     
    // }

    console.log("Game over!")
    if (playerCount > computerCount) {
        return "You win the game!"
    }
    else if (computerCount > playerCount) {
        return "Computer wins the game!"
    }
    else {
        return "It's a tie!"
    }
};

console.log(game());


