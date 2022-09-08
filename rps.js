// Add event listener to buttons
const buttons = document.querySelectorAll('button');

for(let b = 0; b < buttons.length; b++){
    buttons[b].addEventListener('click', game);
}
// I couldn't get this to work--need to review later
// [].forEach(button => {
//     console.log("button:", button);
//     button.addEventListener('click', game);
// });


// Variables tracking score, and round
let userScore = 0;
let computerScore = 0;
let round = 0;

// Win / Lose message
const outcomeMessage = document.querySelector('h1');
// Running score messages
const yourScore = document.getElementById("yscore");
const compScore = document.getElementById("cscore");

// Random number generator (between 1 and 3)
function getRandomNumber() {
    let num = Math.floor(Math.random() * 4);
    if (num === 0) {
        return getRandomNumber();
    }
    return num;
}

// Randomly returns either ‘Rock’ ‘Paper’ or ‘Scissors’.  
function getComputerChoice () {
    let num = getRandomNumber();
    if (num === 1){
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else if (num === 3) {
        return "scissors";
    }
}

// Plays a round of Rock Paper Scissors & displays winner
function playRound(userInput, computerSelection) {
    if (userInput === "rock"){
        round++;
        if (computerSelection === "paper") {
            outcomeMessage.innerText = "You Lose! Paper beats rock";
            return "lose";
        } else if (computerSelection === "scissors") {
            outcomeMessage.innerText = "You win! Rock beats scissors";
            return "win";
        } else {
            outcomeMessage.innerText = "It's a tie!";
            return false;
        }
    } else if (userInput === "paper"){
        round++;
        if (computerSelection === "scissors") {
            outcomeMessage.innerText = "You Lose! Scissors beats paper";
            return "lose";
        } else if (computerSelection === "rock") {
            outcomeMessage.innerText = "You win! Paper beats rock";
            return "win";
        } else {
            outcomeMessage.innerText = "It's a tie!";
            return false;
        }
    } else if (userInput === "scissors"){
        round++;
        if (computerSelection === "rock") {
            outcomeMessage.innerText = "You Lose! Rock beats scissors";
            return "lose";
        } else if (computerSelection === "paper") {
            outcomeMessage.innerText = "You win! Scissors beats paper";
            return "win";
        } else {
            outcomeMessage.innerText = "It's a tie!";
            return false;
        }
    }
}

// Plays a 5-round game of RPS. 
function game() {
    if (round < 5) {
        // Get user input & generate computer selection
        let userInput = event.target.className;
        let computerSelection = getComputerChoice();

        // Play 1 round of RPS and increment score
        let outcome = playRound(userInput, computerSelection);
        if (outcome === "win") {
            userScore++ 
        } else if (outcome === "lose") {
            computerScore++;
        }

        // Update selection display
        let yourElement =  document.getElementById(("you" + round));
        let compElement = document.getElementById(("computer" + round));
        yourElement.innerText = userInput;
        compElement.innerText = computerSelection;

        // Update score display
        yourScore.innerText = userScore; 
        compScore.innerText = computerScore; 
    }

    // If final round is complete
    if (round === 5) {
        // Find the winner and display win/loss message
        if (userScore > computerScore){
            outcomeMessage.innerText = "You won!";
            return;
        } else if (userScore < computerScore) {
            outcomeMessage.innerText = "You lost!";
            return;
        }
        outcomeMessage.innerText = "It's a tie!"
        return;
    }
    // If not yet on final round, return.
    return;
}

// A function that toggles table display upon clicking submit button for the first time



