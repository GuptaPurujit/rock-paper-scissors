// Rock crushes scissors,  You Win!
// Paper covers Rock, You Win!
// Scissors cut paper, You Win!
// Rock crushes scissors,  You Lose!
// Paper covers Rock, You Lose!
// Scissors cut paper, You Lose!
const userScore_span = document.getElementById("user-score"); //dom elemments and span since they are placed in the span element
const compScore_span = document.getElementById("comp-score");
const result = document.getElementById("result");

let userInput = null;
let computerInput = 'rock';

// generates random computer response
function computerRespnse() {
    let rps = ['rock', 'scissors', 'paper'] 
    computerInput = rps[Math.floor(Math.random()*3)];       
}

let x = 'a';  // for border()
let cond = 3; // for updateScore()

// uses several conditions to check various values and derive result according to the responses
function compare() {
    if(userInput == 'rock' && computerInput == 'scissors') {
        console.log('user wins');
        borders();
        document.getElementById(x).classList.add("green-glow");
        setTimeout(() => document.getElementById(x).classList.remove("green-glow"), 500);
        result.innerHTML = 'Rock crushes Scissors,  You Win!';
        cond = 0;   
    }
    else if(userInput == 'rock' && computerInput == 'paper') {
        console.log('computer wins');
        borders();
        document.getElementById(x).classList.add("red-glow");
        setTimeout(function() {document.getElementById(x).classList.remove("red-glow")}, 500);
        result.innerHTML = 'Rock crushes Scissors,  You Lose!';
        cond = 1
    }
    else if(userInput == 'scissors' && computerInput == 'paper') {
        console.log('user wins');
        borders();
        document.getElementById(x).classList.add("green-glow");
        setTimeout(function() {document.getElementById(x).classList.remove("green-glow")}, 500);
        result.innerHTML = 'Scissors cut Paper, You Win!';
        cond = 0;
    } 
    else if(userInput == 'scissors' && computerInput == 'rock') {
        console.log('computer wins');
        borders();
        document.getElementById(x).classList.add("red-glow");
        setTimeout(function() {document.getElementById(x).classList.remove("red-glow")}, 500);
        result.innerHTML = 'Scissors cut Paper, You lose!';
        cond = 1;
    }
    else if(userInput == 'paper' && computerInput == 'rock') {
        console.log('user wins');
        borders();
        document.getElementById(x).classList.add("green-glow");
        setTimeout(function() {document.getElementById(x).classList.remove("green-glow")}, 500);
        result.innerHTML = 'Paper covers Rock, You Win!';
        cond = 0;
    }        
    else if(userInput == 'paper' && computerInput == 'scissors') {
        console.log('computer wins');
        borders();
        document.getElementById(x).classList.add("red-glow");
        setTimeout(function() {document.getElementById(x).classList.remove("red-glow")}, 500);
        result.innerHTML = 'Paper covers Rock, You Lose!';
        cond = 1;
    }        
    else {
        console.log('its a draw!!!');
        result.innerHTML = 'Its a Draw!'
        borders();
        document.getElementById(x).classList.add("grey-glow");
        setTimeout(function() {document.getElementById(x).classList.remove("grey-glow")}, 500);
        cond = 2;
    }
}
let userScore = document.getElementById("user-score").innerHTML;
let compScore = document.getElementById("comp-score").innerHTML;

// updates the score on the screen from 0:0
function updateScore() {
    compare();
    if(cond == 0) {
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
    }
    else if(cond == 1) {
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
    }
    else if(cond == 2) {
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;;
    }
}

// gets computer genetared random response and gets user response and then calls updateScore() which calls compare 
function getInput(x) {
    if(x == 1){
        computerRespnse();
        userInput = 'rock';
        updateScore();
    }
    else if(x == 2){
        computerRespnse();
        userInput = 'paper';
        updateScore();
    }
    else if(x == 3){
        computerRespnse();
        userInput = 'scissors';
        updateScore();
    }
}

// used to get the green, red, grey borders when you win, lose or draw
function borders() {
    if(userInput ==  'rock')
        x = 'r';
    else if(userInput == 'paper')
        x = 'p';
    else
        x = 's';
}