// random choice for Computer
const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// game start
function gameStart() {
    let playerWins = 0;
    let computerWins = 0;
    let gameWinner = "";

// add round/game results via dom
    const body = document.body;
    const resultsDiv = document.createElement("div");
    body.appendChild(resultsDiv);

    const playerWinText = document.createElement("p");
    playerWinText.textContent = "Player Wins: " + playerWins;
    resultsDiv.appendChild(playerWinText);

    const computerWinText = document.createElement("p");
    computerWinText.textContent = "Computer Wins: " + computerWins;
    resultsDiv.appendChild(computerWinText);

    const roundWinText = document.createElement("p");
    resultsDiv.appendChild(roundWinText);

    const gameWinText = document.createElement("p");
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);


// add event listener to buttons to record player's choice, computer choice, and get the round winner 
    const buttons = document.querySelectorAll('.btnChoice');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            computerSelection = computerChoice();
            // roundWinner = playRound(playerSelection, computerSelection);
            roundWinText.textContent = playRound(playerSelection, computerSelection);
            playerWinText.textContent = "Player wins: " + playerWins;
            computerWinText.textContent = "Computer Wins: " + computerWins;
            endGame();
        })
    })

// play round function to check the player's choice and random computer choice, return win/lose/draw
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return 'Draw!';
        }
        else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock") ){
            playerWins++;
            return 'You Won the Round!';
        }
        else {
            computerWins++;
            return 'Computer Won the Round!';
        }
    }



// determine the game's overall winner,
// disable buttons after win/loss
// add play again button
    function endGame() {
        if (playerWins === 5) {
            gameWinner = "YOU WIN!";
            gameWinText.textContent = gameWinner;

            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        }
        else if (computerWins === 5) {
            gameWinner = "COMPUTER WINS!"
            gameWinText.textContent = gameWinner;

            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        }
    }
}//end of gameStart()

gameStart();