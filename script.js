function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Use random number to determine the computer's choice
    switch(randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }

}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // Check for tie
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }

    // Check for player win conditions
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }

    // If it's not a tie and the player didn't win, the computer wins
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper or Scissors)");
        const computerSelection = getComputerChoice();

        console.log(`Round ${round}`);
        console.log(`Player chooses ${playerSelection}`);
        console.log(`Computer chooses ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }
   
    console.log("Game Over")

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }

    console.log(`Final Score - Player - ${playerScore}, Computer - ${computerScore}`)
}