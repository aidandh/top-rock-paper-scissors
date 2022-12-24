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

function createButton(text, parent) {
    let button = document.createElement("button")
    button.innerText = text
    parent.appendChild(button)
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "Tie!"
    else {
        if (playerChoice === getWeakness(computerChoice)) return `You win, ${playerChoice} beats ${computerChoice}!`
        else return `You lose, ${computerChoice} beats ${playerChoice}!`
    }
}

function playGame() {
    const buttonDiv = document.getElementById("game-buttons")

    // creates rock, paper, scissors buttons
    buttonDiv.innerHTML = ""
    createButton("Rock", buttonDiv)
    createButton("Paper", buttonDiv)
    createButton("Scissors", buttonDiv)
}

// for (let i = 0; i < 5; i++) {
//     createButton(`button ${i + 1}`, document.body)
// }