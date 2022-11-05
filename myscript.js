function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let rand = choice[(Math.random() * choice.length) | 0];
    return rand;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    if (player === computer) {
        return 'Wow! We have a tie!';
    } else if (player === 'ROCK') {
        if (computer === 'SCISSORS') {
            return 'You win! Rock beats scissors';
        } else if (computer === 'PAPER') {
            return 'You lose! Paper beats rock';
        }
    } else if (player === 'SCISSORS') {
        if (computer === 'ROCK') {
            return 'You lose! Rock beats scissors';
        } else if (computer === 'PAPER') {
            return 'You win! Scissors beats paper';
        }
    } else if (player === 'PAPER') {
        if (computer === 'ROCK') {
            return 'You win! Paper beats rock';
        } else if (computer === 'SCISSORS') {
            return 'You lose! Scissors beats paper';
        }
    } else {
        return 'WTF happened';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playersChoice = prompt("Choose: rock, paper, or scissors: ");
        let compChoice = getComputerChoice();
        console.log(playRound(playersChoice, compChoice));
    }
}

game();