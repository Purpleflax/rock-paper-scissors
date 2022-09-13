

// 1 = Rock
// 2 = Paper
// 3 = Scissors

let playerChoice = 0
let playerScore = 0
let computerScore = 0
let computerChoice = 0






function playRound(playerChoice, computerChoice) {

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
        console.log("Draw")
    }
    //Draw function
    
    if (playerChoice == 1) {
        if (computerChoice == 2) {
            computerScore++
            console.log("Computer wins this round! Paper beats Rock.")
        }   else if(computerChoice == 3) {
            playerScore++
            console.log("Player wins this round! Rock beats Scissors.")
        }
    }
    //Rock selection function

    if (playerChoice == 2) {
        if (computerChoice == 3) {
            computerScore++
            console.log("Computer wins this round! Scissors beats Paper.")
        }   else if(computerChoice == 1) {
            playerScore++
            console.log("Player wins this round! Paper beats Rock.")
        }
    }
    //Paper selection function

    if (playerChoice == 3) {
        if (computerChoice == 1) {
            computerScore++
            console.log("Computer wins this round! Rock beats Scissors.")
        }   else if(computerChoice == 2) {
            playerScore++
            console.log("Player wins this round! Scissors beats Paper.")
        }
    }
    //Scissors selection function

}

function game() {
    computerScore = 0
    playerScore = 0
    //plays 5 rounds
    
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (playerScore > computerScore) {
        console.log("Player Wins!")
    } 
    else if (playerScore < computerScore) {
        console.log("Computer Wins!")
    }
    else if (playerScore == computerScore) {
        console.log("It's a tie!")
    }   
}
