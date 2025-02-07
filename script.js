console.log("Hello World!")

let computerScore = 0;
let humanScore = 0;

function getComputerChoice(max) {
    const math = Math.floor(Math.random() * max) + 1

    if (math === 1) {
        console.log("rock")
    } else if (math === 2) {
        console.log("paper")
    } else if((math === 3)) {
        console.log("scissors")
    }
}
getComputerChoice(3);

function getHumanChoice() {
    
   let choice = prompt("Choose").toLowerCase();
        
   if(choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Please enter a valid name")
   } else {
    console.log(choice)
   }
    }
getHumanChoice();

function playRound(humanChoice, computerChoice) {

}

function playGame() {
    const humanSelection = humanChoice();
    const computerSelection = computerChoice();

playRound(humanSelection, computerSelection);
}