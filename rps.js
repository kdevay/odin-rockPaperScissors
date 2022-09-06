// Submit button
const button = document.querySelector('input');
button.addEventListener('click', game(inputFinder()));

// Win / Lose message
const outcomeMessage = document.querySelector('h1');
// Score variables
const yourScore = document.querySelector(".yscore");
const compScore = document.querySelector(".cscore");

// A function that returns the value of user's dropdown selection 
function inputFinder() {
    var userInput = document.getElementById("select").value;
    console.log(userInput)
    return userInput;
}

// A function that generates a random number between 1 and 3
function getRandomNumber() {
    let num = Math.floor(Math.random() * 4);
    if (num === 1 || num === 2 || num === 3) {
        return num;
    }
    return getRandomNumber();
}


// A function that randomly returns either ‘Rock’ ‘Paper’ or ‘Scissors’.  
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

// A function that plays a single round of Rock Paper Scissors. ("You Lose! Paper beats Rock"); 
function playRound(userInput, computerSelection) {
    if (userInput === "rock"){
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

// A function that plays a 5-round game of RPS. 
function game(userInput) {
    // Two variables for tracking score, one for tracking round
    let userScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) {
        // Increment round
        round++;

        // Generate computer selection
        let computerSelection = getComputerChoice();

        // Update selection display
        let yourElement =  document.getElementById("you" + round);
        let compElement = document.getElementById("computer" + round);
        yourElement.innerText = userInput;
        compElement.innerText = computerSelection;

        // Play 1 round of RPS and increment score
        let outcome = playRound(userInput, computerSelection);
        outcome = "win" ? userScore++ : computerScore++;

        // Update score display
        yourScore.innerText = userScore; 
        compScore.innerText = computerScore; 
    }

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

// A function that toggles table display upon clicking submit button for the first time



