let compGuess = "";
let playerGuess = "";
let input = "";
let randomNumber = 0;
let playerScore = 0;
let compScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random()* max);
}

function computerPlay() {
    randomNumber = getRandomInt(3);
    if (randomNumber == 0) {
        return compGuess = "rock";
    } else if (randomNumber == 1) {
        return compGuess = "paper";
    } else {
        return compGuess = "scissors";
    }
}

function roundOfGame(playerGuess, compGuess) {
    input = String(prompt("Please select Rock, Paper or Scissors"));
    playerGuess = input.toLowerCase();
    compGuess = computerPlay();
    if (playerGuess == compGuess) {
        console.log("It's a Tie!");
    } else {
        switch(playerGuess) {
            case "rock":
                if (compGuess == "paper") {
                    console.log("You lose! Bozo! Paper beats Rock");
                    compScore++;
                } else {
                    console.log("You Win! Rock beats Scissors");
                    playerScore++;
                }
                break;
            case "paper":
                if (compGuess == "rock") {
                    console.log("You Win! Paper beats Rock");
                    playerScore++;
                } else {
                    console.log("You lose! Bozo! Scissors beats Paper");
                    compScore++;
                }
                break;
            case "scissors":
                if (compGuess == "paper") {
                    console.log("You Win! Scissors beats Paper");
                    playerScore++;
                } else {
                    console.log("You lose! Bozo! Rock beats Scissors");
                    compScore++;
                }
                break;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        roundOfGame();
        console.log(`Current score is; Computer : ${compScore}, Player : ${playerScore} `)
    }
}

game();