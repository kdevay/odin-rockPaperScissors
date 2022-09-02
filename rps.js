// Input variable
const userInput = document.queryCommandIndeterm("select");

// Submit button
const submit = document.querySelector('input');
submit.addEventListener('click', game(userInput));

// Win / Lose message
const outcomeMessage = document.querySelector('h1');
// Score variables
const yourScore = document.querySelector(".yscore");
const compScore = document.querySelector(".cscore");

// A function that generates a random number between 1 and 3
function getRandomNumber() {
    let num = Math.floor(Math.random(1) * 10);
    if (num < 0) {
        num *= -1;
        return num;
    }
    if (num > 3) {
        num -= (num - 3);
        return num;
    }
    if (num === 0) {
        num = getRandomNumber();
        return num;
    }
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
            return "lose";
        } else if (computerSelection === "scissors") {
            return "win";
        } else {
            return false;
        }
    } else if (userInput === "paper"){
        if (computerSelection === "scissors") {
            return "lose";
        } else if (computerSelection === "rock") {
            return "win";
        } else {
            return false;
        }
    } else if (userInput === "scissors"){
        if (computerSelection === "rock") {
            return "lose";
        } else if (computerSelection === "paper") {
            return "win";
        } else {
            return false;
        }
    }
    // conditionals for rock/paper/scissor comparison
    // return a string declaring the round winner ("You <Lose/Win>! <Paper> beats <Rock>")
    return;
}

// A function that plays a 5-round game of RPS. 
function game(userInput) {
    // Two variables for tracking score, one for tracking round
    let userScore = 0;
    let computerScore = 0;
    let round = 0;


    while round < 5 {
        let computerSelection = getComputerChoice();
        let winner = playRound(userInput, computerSelection) 
        // increment score based on outcome of playRound
    }
    // report a winner or loser at the end
    return;
}

// A function that toggles table display upon clicking submit button for the first time



// log winner results of each round and the total game to the console
// Use prompt() to get user input.????


