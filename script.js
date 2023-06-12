let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id)
    })
})

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Use random number to determine the computer's choice
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' & computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again.'
            disableButtons()
        }
    }

    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }

    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
        if (computerScore == 5) {
            result += '<br><br>You lose, better luck next time! Reload the page to play again.'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
}

function disableButtons() {
    buttons.forEach(elem => elem.disabled = true)
}