function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        randomNumber = "ROCK";
    } else if (randomNumber === 1) {
        randomNumber = "PAPER";
    } else {
        randomNumber = "SCISSORS";
    }
    console.log(`Computer Choice: ${randomNumber}`)
    return randomNumber;
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors").toUpperCase();
    console.log(`Human Choice: ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(); 
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}!`);
        humanScore++; 
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log('Tie!')
    } else {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    console.log(`Your score: ${humanScore},  Comp Score: ${computerScore}`);
    console.log('---------------------------------------------------------');
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("You WON!");
    } else if (computerScore > humanScore) {
        console.log(" You LOST!");
    } else {
        console.log("You tied!");
    }
}

playGame();


