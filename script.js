const body = document.querySelector("body")

let buttonStart = document.createElement("button");
buttonStart.textContent = "Start";
buttonStart.addEventListener("click", () => {
    hiddenButtonStart()
    createDivContainer()
})

body.appendChild(buttonStart);

let hiddenStart = false;
function hiddenButtonStart() {
    hiddenStart = !hiddenStart;
    if (hiddenStart) {
        buttonStart.style.visibility = "hidden";
    } else {
        buttonStart.style.visibility = "visible";
    }
}

function createDivContainer() {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("id", "divContainer");
    body.appendChild(divContainer);
    // divContainer.textContent = "Div Container";
    createButton()
    createSubDiv()
}

function createButton() {
    const buttonRock = document.createElement("button");
    buttonRock.setAttribute("id", "buttonRock");
    const buttonPaper = document.createElement("button");
    buttonPaper.setAttribute("id", "buttonPaper");
    const buttonScissors = document.createElement("button");
    buttonScissors.setAttribute("id", "buttonScissors");

    buttonRock.textContent = "Rock";
    buttonPaper.textContent = "Paper";
    buttonScissors.textContent = "Scissors";

    divContainer.appendChild(buttonRock)
    divContainer.appendChild(buttonPaper)
    divContainer.appendChild(buttonScissors)
}

function createSubDiv() {
    const divHumanChoice = document.createElement("div");
    const divComputerChoice = document.createElement("div");
    const divInformation = document.createElement("div");
    const divHumanScore = document.createElement("div");
    const divComputerScore = document.createElement("div");


    divHumanChoice.textContent = `Human Choice: `;
    divComputerChoice.textContent = `Computer Choice: `;
    divInformation.textContent = `Information: contoh output nya=  You Win! humanChoice beats computerChoice`;
    divHumanScore.textContent = `Human Score: `;
    divComputerScore.textContent = `Computer Score: `;

    divContainer.appendChild(divHumanChoice);
    divContainer.appendChild(divComputerChoice);
    divContainer.appendChild(divInformation);
    divContainer.appendChild(divHumanScore);
    divContainer.appendChild(divComputerScore);

}