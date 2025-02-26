const choices = document.querySelector(".choices");
const computerChoice = document.getElementById("computer-choice");

const playerShoutOut = document.getElementById("player-shoutout");
const computerShoutOut = document.getElementById("computer-shoutout");
const finalShoutOut = document.getElementById("final-shoutout");
const restartShoutOut = document.getElementById("restart-shoutout");
const restartGameOptions = document.getElementById("restart-game-options");

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
    restartGameOptions.style.display = "none";

    choices.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            let humanChoice = e.target.textContent.trim().toLowerCase();
            let computerChoice = getComputerChoice();
            if (options.includes(humanChoice)) {
                console.log(`You chose: ${humanChoice}`);
                playerShoutOut.textContent = `You chose: ${humanChoice}`;
                console.log(`Computer chose: ${computerChoice}`);
                computerShoutOut.textContent = `Computer chose: ${computerChoice}`;
                playRound(computerChoice, humanChoice)
                roundsPlayed++
            }
            else {
                console.log("Error occurred when selecting a choice, please try again...")
            }

        }
            if (roundsPlayed === roundsToPlay) {
                console.log(`Final Result: Human ${humanScore} vs Computer: ${computerScore}`);
                finalShoutOut.textContent = `Final Result: Human ${humanScore} vs Computer: ${computerScore}`;
                restartShoutOut.textContent = "Restart Game?"
                restartGameOptions.style.display = "block";
            }
    });

    restartGameOptions.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            if (e.target.textContent.trim().toLowerCase() === "yes") {
                restartGame();
            }
            else if (e.target.textContent.trim().toLowerCase() === "no") {
                restartShoutOut.textContent = "Thank you for playing!";
            }
        }
    });
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;


    playerShoutOut.textContent = '';
    computerShoutOut.textContent = '';
    finalShoutOut.textContent = '';
    restartShoutOut.textContent = '';
    restartGameOptions.display = "none";

    playGame()

}

playGame()