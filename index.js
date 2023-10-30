// select btn on html
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const result = document.querySelector('.result');
const playerCountP = document.querySelector('.playerCount');
const compCountP = document.querySelector('.compCount');
const runningCountContainer = document.querySelector('.runningCount');

let playerCount = 0;
let computerCount = 0;

let getComputerChoice = (pick) => {
    const choice = ["rock", "paper", "scissors"];
    pick = Math.floor(Math.random(choice) * choice.length);
    switch (pick) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    };
};
    
let checkWinner = (playerCount, computerCount) => {
    console.log('player', playerCount, 'comp', computerCount);
   if (playerCount === 5){
    const h2 = document.createElement("h2");
    h2.classList.add("player-win");
    h2.innerText = `You are the winner! You win ${playerCount} against ${computerCount}. Refresh the page to start again.`;
    result.appendChild(h2);
} else if (computerCount === 5){
    const h2 = document.createElement("h2");
    h2.classList.add("computer-win");
    h2.innerText = `Computer wins! It wins with ${computerCount} against you with ${playerCount}. Refresh the page to start again.`;
    result.appendChild(h2);
} 
}

let runningCount = (playerCount, computerCount) => {
    playerCountP.innerText = `Player: ${playerCount}`;
    compCountP.innerText = `Computer: ${computerCount}`;
    runningCountContainer.appendChild(playerCountP, compCountP);
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement("p");
        p.innerText = "Ties! Try again.";
        result.appendChild(p);
    }
    else if ( (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")) {
        playerCount++;
        const p = document.createElement("p");
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        result.appendChild(p);
    }
    else {
        computerCount++;
        const p = document.createElement("p");
        p.innerText = `Computer wins! ${computerSelection} beats ${playerSelection}`;
        result.appendChild(p);
    }
};

// create 3 buttons and call playRound with its correct playerSelection
    btnRock.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = "rock";
        playRound(playerSelection, computerSelection);
        runningCount(playerCount, computerCount);
        checkWinner(playerCount, computerCount);
        }
    )
    btnPaper.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = "paper";
        playRound(playerSelection, computerSelection);
        runningCount(playerCount, computerCount);
        checkWinner(playerCount, computerCount);
    })
    btnScissors.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = "scissors";
        playRound(playerSelection, computerSelection);
        runningCount(playerCount, computerCount);
        checkWinner(playerCount, computerCount);
    })

let game = () => {

    // for (let i = 0; i < 5 ; i++) {
        // const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        // playerSelection = getUserChoice();
        // computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        // if (checkWinner(playerSelection, computerSelection) == "Player"){
        //     playerCount++;
        // }
        // else if (checkWinner(playerSelection, computerSelection) == "Computer"){
        //     computerCount++;
        // }     
    // }

    console.log("Game over!")
    // if (playerCount > computerCount) {
    //     return "You win the game!"
    // }
    // else if (computerCount > playerCount) {
    //     return "Computer wins the game!"
    // }
    // else {
    //     return "It's a tie!"
    // }
};

console.log(game());


