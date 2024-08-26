function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`Human Choice: ${humanChoice} Computer Choice: ${computerChoice}`);

        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            ++humanScore

            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "rock")) {
            ++computerScore

            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        } else if ((humanChoice === "rock" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "paper")) {
            console.log(`It's a Tie! ${computerChoice} beats ${humanChoice}`)
        }

    }

    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}
playGame();

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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors ?", "").toLowerCase();
    return humanChoice;
}

