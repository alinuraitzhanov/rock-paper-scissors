const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[ Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt('Choose rock, paper, or scissors:').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let human = choices.indexOf(humanChoice);
    let computer = choices.indexOf(computerChoice);
    let outcomeIndex = (computer - human + 3) % 3;
    switch (outcomeIndex) {
        case 0:
            console.log(`It\'s a tie! You both chose ${computerChoice}`);
            console.log(`Score: ${humanScore} - ${computerScore}`);
            break;
        case 1:
            computerScore++;
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            console.log(`Score: ${humanScore} - ${computerScore}`);
            break;
        case 2:
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`Score: ${humanScore} - ${computerScore}`);
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    
    if (humanScore > computerScore) {
        console.log(`You won the match ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the match ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`Tie match! ${humanScore} - ${computerScore}`);
    }
    
}

playGame();