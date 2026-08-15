const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener('click', () => playRound(rock.textContent.toLowerCase(), getComputerChoice()));
paper.addEventListener('click', () => playRound(paper.textContent.toLowerCase(), getComputerChoice()));
scissors.addEventListener('click', () => playRound(scissors.textContent.toLowerCase(), getComputerChoice()));
const score = document.getElementById('score');


function getComputerChoice() {
    return choices[ Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    let human = choices.indexOf(humanChoice);
    let computer = choices.indexOf(computerChoice);
    let outcomeIndex = (computer - human + 3) % 3;
    switch (outcomeIndex) {
        case 0:
            score.textContent = `It\'s a tie. You both chose ${computerChoice}. Score: ${humanScore} - ${computerScore}`;
            break;
        case 1:
            computerScore++;
            score.textContent = `Computer wins. ${computerChoice} beats ${humanChoice}. Score: ${humanScore} - ${computerScore}`;
            break;
        case 2:
            humanScore++;
            score.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore} - ${computerScore}`;
            break;
    }
    if (humanScore === 5) {
        score.textContent = `You win the game! Final score: ${humanScore} - ${computerScore}`
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    } else if (computerScore === 5) {
        score.textContent = `Computer wins the game. Final score: ${humanScore} - ${computerScore}`
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    }
}


