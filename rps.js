
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return("Draw")
    }
    //Draw function
    
    if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            return("Computer Wins")
        }   elif(computerChoice == "Scissors") {
            return("Player Wins")
        }
    }
    //Rock selection function

    if (playerChoice == "Paper") {
        if (computerChoice == "Scissors") {
            return("Computer Wins")
        }   elif(computerChoice == "Rock") {
            return("Player Wins")
        }
    }
    //Paper selection function

    if (playerChoice == "Scissors") {
        if (computerChoice == "Rock") {
            return("Computer Wins")
        }   elif(computerChoice == "Paper") {
            return("Player Wins")
        }
    }
    //Scissors selection function
}
