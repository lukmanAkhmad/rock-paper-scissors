function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = "";
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors ?", "").toLowerCase();
    console.log(humanChoice)
}
getHumanChoice();