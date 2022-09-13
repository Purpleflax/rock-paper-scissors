let array = [1, 2, 3];
let rand = Math.random()
rand *= array.lenght;
rand = Math.floor(rand);

// 1 = Rock
// 2 = Paper
// 3 = Scissors
let playerChoiceString = prompt("Please type Rock, Paper, or Scissors.")

if (playerChoiceString == "Rock") {
    playerChoice == 1;
}
    else if (playerChoiceString == "Paper") {
    playerChoice == 2;
    }
    else if (playerChoiceString == "Scissors") {
    playerChoice == 3;
    }
    else {
    console.log("You have chosen an invalid input.")
    }

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return("Draw")
    }
    //Draw function
    
    if (playerChoice == 1) {
        if (computerChoice == 2) {
            return("Computer Wins")
        }   else if(computerChoice == 3) {
            return("Player Wins")
        }
    }
    //Rock selection function

    if (playerChoice == 2) {
        if (computerChoice == 3) {
            return("Computer Wins")
        }   else if(computerChoice == 1) {
            return("Player Wins")
        }
    }
    //Paper selection function

    if (playerChoice == 3) {
        if (computerChoice == 1) {
            return("Computer Wins")
        }   else if(computerChoice == 2) {
            return("Player Wins")
        }
    }
    //Scissors selection function
}
