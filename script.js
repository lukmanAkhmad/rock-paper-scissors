function playGame() {
    // User Interface
    const body = document.querySelector("body");

    const buttonRock = document.createElement("button");
    buttonRock.setAttribute("id", "buttonRock");
    const buttonPaper = document.createElement("button");
    buttonPaper.setAttribute("id", "buttonPaper");
    const buttonScissors = document.createElement("button");

    buttonRock.textContent = "Rock";
    buttonPaper.textContent = "Paper";
    buttonScissors.textContent = "Scissors"

    body.appendChild(buttonRock)
    body.appendChild(buttonPaper)
    body.appendChild(buttonScissors)

    buttonRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    buttonPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    buttonScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    const divWinnerInfo = document.createElement("div");
    const divInformation = document.createElement("div");
    const divHumanScore = document.createElement("div");
    const divComputerScore = document.createElement("div");

    body.appendChild(divInformation);
    body.appendChild(divWinnerInfo);
    body.appendChild(divHumanScore);
    body.appendChild(divComputerScore);
    // end

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        divInformation.textContent = `Human Choice: ${humanChoice} | Computer Choice: ${computerChoice}`;

        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            ++humanScore

            divWinnerInfo.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "rock")) {
            ++computerScore

            divWinnerInfo.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        } else if ((humanChoice === "rock" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "paper")) {
            
            divWinnerInfo.textContent = `It's a Tie! ${computerChoice} beats ${humanChoice}`;
        }

        divHumanScore.textContent = `Human Score: ${humanScore}`;
        divComputerScore.textContent = `Computer Score: ${computerScore}`;

        if (computerScore === 5 || humanScore === 5) {
            buttonPaper.style.visibility = "hidden";
            buttonRock.style.visibility = "hidden";
            buttonScissors.style.visibility = "hidden"
        }
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