

// 1 = Rock
// 2 = Paper
// 3 = Scissors

let playerChoice = 0
let playerScore = 0
let computerScore = 0
let computerChoice = 0






function playRound() {

    computerChoice = Math.floor(Math.random() * 3) + 1
    let playerChoiceString1 = prompt("Please type Rock, Paper, or Scissors.")
    let playerChoiceString = playerChoiceString1.slice(0).toLowerCase();
    if (playerChoiceString == "rock") {
    (playerChoice = 1)
    }
    else if (playerChoiceString == "paper") {
    (playerChoice = 2)
    }
    else if (playerChoiceString == "scissors") {
    (playerChoice = 3)
    }
    else {
    console.log("You have chosen an invalid input.")
    }
    if (playerChoice == computerChoice) {
        return("Draw")
    }
    //Draw function
    
    if (playerChoice == 1) {
        if (computerChoice == 2) {
            computerScore++
            return("Computer Wins! Paper beats Rock.")
        }   else if(computerChoice == 3) {
            playerScore++
            return("Player Wins! Rock beats Scissors.")
        }
    }
    //Rock selection function

    if (playerChoice == 2) {
        if (computerChoice == 3) {
            computerScore++
            return("Computer Wins! Scissors beats Paper.")
        }   else if(computerChoice == 1) {
            playerScore++
            return("Player Wins! Paper beats Rock.")
        }
    }
    //Paper selection function

    if (playerChoice == 3) {
        if (computerChoice == 1) {
            computerScore++
            return("Computer Wins! Rock beats Scissors.")
        }   else if(computerChoice == 2) {
            playerScore++
            return("Player Wins! Scissors beats Paper.")
        }
    }
    //Scissors selection function
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

if (playerScore > computerScore) {
    console.log("Player Wins!")
} 
else if (playerScore < computerScore) {
    console.log("Computer Wins!")
}