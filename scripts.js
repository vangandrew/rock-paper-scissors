function getComputerChoice() {
    /* Rock = Math.random(0 - 0.33), Paper = Math.random(0.34 - 0.66), Scissors = Math.random(0.67 - 1)  */
    let result = Math.random();
    if (result < 0.34) {
        console.log("Rock");
        console.log(result);
    }
    else if (result < 0.67) {
        console.log("Paper");
        console.log(result);
    }
    else if (result > 0.67) {
        console.log("Scissors");
        console.log(result);
    }
};

getComputerChoice();

function getHumanChoice(input) {
    choices = ["Rock", "Paper", "Scissors"];
    let result = prompt("Please enter your choice!");
    if (input in choices) {
        console.log(result);
    }
    else {
        input = prompt("Not a valid choice... Please enter a valid choice!");
    }
}

getHumanChoice();