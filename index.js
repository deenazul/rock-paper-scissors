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

let getComputerChoice= (pick) => {
    const choice = ["Rock", "Paper", "Scissors"];
    pick = Math.floor(Math.random(choice) * choice.length);
    switch (pick) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    };
};
    
let checkWinner = (playerCount, computerCount) => {
   if (playerCount === 5){
    const h2 = document.createElement("h2");
    h2.classList.add("player-win");
    h2.innerText = `You are the winner! \nYou win ${playerCount} against ${computerCount}.`;
    result.appendChild(h2);
} else if (computerCount === 5){
    const h2 = document.createElement("h2");
    h2.classList.add("computer-win");
    h2.innerText = `Computer wins! \nIt wins with ${computerCount} against you with ${playerCount}.`;
    result.appendChild(h2);
} else if (playerCount > 5 || computerCount > 5){
    location.reload();
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
    else if ( (playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerCount++;
        const p = document.createElement("p");
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
        result.appendChild(p);
    }
    else {
        computerCount++;
        const p = document.createElement("p");
        p.innerText = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        result.appendChild(p);
    }
};

// create 3 buttons and call playRound with its correct playerSelection
    btnRock.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = "Rock";
        playRound(playerSelection, computerSelection);
        runningCount(playerCount, computerCount);
        checkWinner(playerCount, computerCount);
        }
    )
    btnPaper.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = "Paper";
        playRound(playerSelection, computerSelection);
        runningCount(playerCount, computerCount);
        checkWinner(playerCount, computerCount);
    })
    btnScissors.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = "Scissors";
        playRound(playerSelection, computerSelection);
        runningCount(playerCount, computerCount);
        checkWinner(playerCount, computerCount);
    })




