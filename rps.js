

// 1 = Rock
// 2 = Paper
// 3 = Scissors

let playerChoice = 0
let playerScore = 0
let computerScore = 0
let computerChoice = 0
const resultsDiv = document.querySelector("#resultsArray");
const scoreDiv = document.querySelector("#score");
const resultsImage = resultsDiv.querySelector("#resultsImg");
const resultsText = resultsDiv.querySelector("#results");

function playRound(playerChoice, computerChoice) {
    computerChoice = Math.floor(Math.random() * 3) + 1
    //computerChoice = Math.floor(Math.random() * 3) + 1
    /* let playerChoiceString1 = prompt("Please type Rock, Paper, or Scissors.")
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
    */
    if (playerChoice == computerChoice) {
        resultsText.textContent = "Draw";
    }
    //Draw function
    
    if (playerChoice == 1) {
        if (computerChoice == 2) {
            computerScore++
            resultsText.textContent = "Computer wins this round! Paper beats Rock.";
        }   else if(computerChoice == 3) {
            playerScore++
            resultsText.textContent = "Player wins this round! Rock beats Scissors.";
        }
    }
    //Rock selection function

    if (playerChoice == 2) {
        if (computerChoice == 3) {
            computerScore++
            resultsText.textContent = "Computer wins this round! Scissors beats Paper.";
        }   else if(computerChoice == 1) {
            playerScore++
            resultsText.textContent = "Player wins this round! Paper beats Rock.";
        }
    }
    //Paper selection function

    if (playerChoice == 3) {
        if (computerChoice == 1) {
            computerScore++
            resultsText.textContent = "Computer wins this round! Rock beats Scissors.";
        }   else if(computerChoice == 2) {
            playerScore++
            resultsText.textContent = "Player wins this round! Scissors beats Paper.";
        }
    }
    //Scissors selection function
    scoreDiv.innerHTML = "<br> Current player score is " + playerScore + " <br> Current computer score is " + computerScore;

    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultsText.innerHTML = "<br> Player wins!";
    }
    if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultsText.innerHTML = "<br> Computer wins!";
    }

    resultsImage.innerHTML = "<img src = images/" + playerChoice + ".png> <img src = images/" + computerChoice + ".png>";

}

function game() {
    computerScore = 0
    playerScore = 0
    //plays 5 rounds
    
   // for (let i = 0; i < 5; i++) {
   //     playRound()
   // }
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

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playerChoice = 1;
    playRound(playerChoice, computerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playerChoice = 2;
    playRound(playerChoice, computerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playerChoice = 3;
    playRound(playerChoice, computerChoice);
});

