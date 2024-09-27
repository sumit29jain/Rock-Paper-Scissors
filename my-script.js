// get random computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
return prompt("Please enter your choice: rock, paper, scissors");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) { 
    if (humanChoice === "rock" && computerChoice === "scissors"||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
          humanScore++;
          console.log(`You Win! ${humanChoice} beats ${computerChoice} .`)
    } else if (computerChoice === "rock" && humanChoice === "scissors" ||
               computerChoice === "paper" && humanChoice === "rock" ||
               computerChoice === "scissors" && humanChoice === "paper"
    ) {
          computerScore++;
          console.log(`You Lost! ${computerChoice} beats ${humanChoice} .`);
    } else if (humanChoice === computerChoice) {
      console.log("It's a draw");
    } else {
      console.log("Invalid input");
    }
  }
  

  for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
