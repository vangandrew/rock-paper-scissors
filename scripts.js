const choices = document.querySelector(".choices");

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

function playGame() {
    options = ['rock', 'paper', 'scissors'];
    let roundsPlayed = 0;
    let roundsToPlay = 5;

    choices.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            let humanChoice = e.target.textContent.trim().toLowerCase();
            let computerChoice = getComputerChoice();
            if (options.includes(humanChoice)) {
                console.log(`You chose: ${humanChoice}`);
                console.log(`Computer chose: ${computerChoice}`);
                playRound(computerChoice, humanChoice)
                roundsPlayed++
            }
            else {
                console.log("Error occurred when selecting a choice, please try again...")
            }

        }
            if (roundsPlayed === roundsToPlay) {
                console.log(`Final Result: Human ${humanScore} vs Computer: ${computerScore}`)
            }
    })
}

playGame()