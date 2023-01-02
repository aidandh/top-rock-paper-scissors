function setButtonPaneState(state) {
    const buttonPane = document.getElementById("button-pane")
    buttonPane.innerHTML = ""
    
    switch(state) {
        case "play":
            createButton("Play", buttonPane)
            break
        
        case "choice":
            createButton("Rock", buttonPane)
            createButton("Paper", buttonPane)
            createButton("Scissors", buttonPane)
            break
    }
}

function createButton(text, parent, clickFunction) {
    let button = document.createElement("button")
    button.innerText = text
    parent.appendChild(button)

    if (clickFunction != undefined) {
        button.addEventListener("click", clickFunction)
    }
}

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function getPlayerChoice() {
    const validChoices = ["rock", "paper", "scissors"]
    
    while (true) {
        let playerChoice = prompt("Please choose rock, paper, or scissors").toLowerCase()
        if (validChoices.includes(playerChoice)) return playerChoice
        else console.log("Invalid choice. Please choose again.")
    }
}

function getWeakness(choice) {
    switch(choice) {
        case "rock": return "paper"
        case "paper": return "scissors"
        case "scissors": return "rock"
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "Tie!"
    else {
        if (playerChoice === getWeakness(computerChoice)) return `You win, ${playerChoice} beats ${computerChoice}!`
        else return `You lose, ${computerChoice} beats ${playerChoice}!`
    }
}

setButtonPaneState("play")