function setButtonPaneState(state) {
    let createButton = (text, parent, clickFunction) => {
        let button = document.createElement("button")
        button.innerText = text
        parent.appendChild(button)

        if (clickFunction != undefined) {
            button.addEventListener("click", clickFunction)
        }
    }
    
    const buttonPane = document.getElementById("button-pane")
    buttonPane.innerHTML = ""
    
    switch(state) {
        case "empty":
            break
        
        case "play":
            createButton("Play", buttonPane, () => {
                setButtonPaneState("choice")
            })
            break

        case "play_again":
            createButton("Play Again", buttonPane, () => {
                setButtonPaneState("choice")
            })
            break
        
        case "choice":
            createButton("Rock", buttonPane, () => {
                playRound("rock")
            })
            createButton("Paper", buttonPane, () => {
                playRound("paper")
            })
            createButton("Scissors", buttonPane, () => {
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