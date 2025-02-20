const choices = document.querySelector(".choices");
choices.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        getHumanChoice()
    } 
})


function getComputerChoice() {
    /* Rock = Math.random(0 - 0.33), Paper = Math.random(0.34 - 0.66), Scissors = Math.random(0.67 - 1)  */
    let result = Math.random();
    let computerChoice = null;

    if (result < 0.34) {
        computerChoice = "rock";
    }
    else if (result < 0.67) {
        computerChoice = "paper";
    }
    else if (result > 0.67) {
        computerChoice = "scissors";
    }
    computerChoice = computerChoice.trim().toLowerCase();
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


let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    let result = null;
    if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        result = "Human won!"
        humanScore++;
    }
    else if (playerChoice === computerChoice) {
        result = "Tie!"
    }
    else {
        result = "Computer won!"
        computerScore++;
    }
    return result
}

function playGame(roundsToPlay=5) {

    for (let i = 0; i < roundsToPlay; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`The computer chose: ${computerChoice}`);
        const result = playRound(computerChoice, humanChoice);
        console.log(result);
    }

}

// playGame(roundsToPlay=5);
console.log(`Final Result: Human: ${humanScore} vs Computer: ${computerScore}`);