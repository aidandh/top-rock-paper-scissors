function setButtonPaneState(state) {
    const buttonPane = document.getElementById("button-pane")
    buttonPane.innerHTML = ""
    
    let createButton = (text, clickFunction) => {
        let button = document.createElement("button")
        button.innerText = text
        buttonPane.appendChild(button)

        if (clickFunction != undefined) {
            button.addEventListener("click", clickFunction)
        }
    }
    
    switch(state) {
        case "empty":
            break
        
        case "play":
            createButton("Play", () => {
                setButtonPaneState("choice")
            })
            break

        case "play_again":
            createButton("Play Again", () => {
                setButtonPaneState("choice")
            })
            break
        
        case "choice":
            createButton("Rock", () => {
                playRound("rock")
            })
            createButton("Paper", () => {
                playRound("paper")
            })
            createButton("Scissors", () => {
                playRound("scissors")
            })
            break
    }
}

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function getWeakness(choice) {
    switch(choice) {
        case "rock": return "paper"
        case "paper": return "scissors"
        case "scissors": return "rock"
    }
}

function playRound(playerChoice) {
    setButtonPaneState("empty")
}

setButtonPaneState("play")