function getComputerChoice() {
    /* Rock = Math.random(0 - 0.33), Paper = Math.random(0.34 - 0.66), Scissors = Math.random(0.67 - 1)  */
    let result = Math.random();
    let computerChoice = null;

    if (result < 0.34) {
        computerChoice = "Rock";
    }
    else if (result < 0.67) {
        computerChoice = "Paper";
    }
    else if (result > 0.67) {
        computerChoice = "Scissors";
    }

    return computerChoice
};


function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let result = prompt("Please enter your move: ");
    while (!choices.includes(result)) {
        result = prompt("Not a valid move... Please enter a valid move: ").trim().toLowerCase()
        }
    return result
    }


const humanChoice = console.log(`You chose: ${getHumanChoice()}`);
const computerChoice = console.log(`The computer chose: ${getComputerChoice()}`);

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        console.log("Tie!!");
    }
    else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("Human won!");
        humanScore++;
    }
    else {
        console.log("Computer won!");
        computerScore++;
    }
}

playRound(computerChoice, humanChoice);
console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);