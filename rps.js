

// 1 = Rock
// 2 = Paper
// 3 = Scissors

let playerChoice = 0
let playerScore = 0
let computerScore = 0
let computerChoice = 0
const resultsDiv = document.querySelector("#resultsArray");
const scoreDiv = document.querySelector("#score");
const playerTally = scoreDiv.querySelector("#playerScore");
const computerTally = scoreDiv.querySelector("#computerScore");
const resultsImage = resultsDiv.querySelector("#resultsImg");
const resultsText = resultsDiv.querySelector("#results");

function playRound(playerChoice, computerChoice) {
    computerChoice = Math.floor(Math.random() * 3) + 1
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
    playerTally.innerHTML = "<br>" + playerScore;
    computerTally.innerHTML = "<br>" + computerScore;

    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        alert("You win! Pick another option to continue playing.");
    }
    if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        alert("You lose! Pick another option to continue playing.");
    }

    resultsImage.innerHTML = "<img src = images/" + playerChoice + ".png> <img src = images/" + computerChoice + ".png>";

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