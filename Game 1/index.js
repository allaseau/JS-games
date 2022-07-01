const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    switch (randomNumber) {
        case 1: computerChoice = 'pierre'
        break;
        case 2: computerChoice = 'papier'
        break;
        case 3: computerChoice = 'ciseaux'
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'égalité'
    }
    if (computerChoice === 'pierre' && userChoice === 'papier') {
        result = 'Gagné !'
    }
    if (computerChoice === 'pierre' && userChoice === 'ciseaux') {
        result = 'Perdu !'
    }
    if (computerChoice === 'papier' && userChoice === 'ciseaux') {
        result = 'Gagné !'
    }
    if (computerChoice === 'papier' && userChoice === 'pierre') {
        result = 'Perdu !'
    }
    if (computerChoice === 'ciseaux' && userChoice === 'pierre') {
        result = 'Gagné !'
    }
    if (computerChoice === 'ciseaux' && userChoice === 'papier') {
        result = 'Perdu !'
    }
    resultDisplay.innerHTML = result
}