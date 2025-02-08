console.log("Hello World!")

let computerScore = 0;
let humanScore = 0;

function getComputerChoice(max) {
    const math = Math.floor(Math.random() * max) + 1
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors"

    if (math === 1) {
       return (
        console.log(`Computer's choice %c${rock}`, "font-weight: bold"),
        rock
       )
    } else if (math === 2) {
        return (
            console.log(`Computer's choice %c${paper}`, "font-weight: bold"),
            paper
           )
    } else if((math === 3)) {
        return (
            console.log(`Computer's choice %c${scissors}`, "font-weight: bold"),
            scissors
           )
    }
}


function getHumanChoice () {
    
   let choice = prompt("Choose").toLowerCase();
        
   if(choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Please enter a valid name")
   } else {
    return choice
   }
    }

    function getResults () {
        if(humanScore > computerScore){
            return alert(`You are a winner! With ${humanScore} point/s!!!`)
        } else if (computerScore > humanScore){
            return alert(`Computer is a winner! With ${computerScore} point/s!!!`)
        } else {
            return alert (`We have a tie! With ${humanScore} point/s and ${computerScore} point/s on each side!!!`)
        }
    }
    
function playGame () {
    function playRound(humanChoice, computerChoice) {

        if(humanChoice === "rock" && computerChoice === "scissors") {
               return (
                    console.log("Congrats! You won!"),
                    console.log("Your score:",  ++humanScore)
               ) 
        
        } else if (humanChoice === "rock" && computerChoice === "rock") {
              return  console.log("Tie!")
        
        } else if (humanChoice === "rock" && computerChoice === "paper"){
                return (
                    console.log("You lose!"),
                    console.log("Computer score:",  ++computerScore)
                )

        } else if (humanChoice === "paper" && computerChoice === "rock"){
                return (
                    console.log("Congrats! You won!"),
                    console.log("Your score:",  ++humanScore)
                )
            
        } else if (humanChoice === "paper" && computerChoice === "paper") {
                return console.log("Tie!")

        }  else if (humanChoice === "paper" && computerChoice === "scissors"){
                return (
                    console.log("You lose!"),
                    console.log("Computer score:",  ++computerScore))

        } else if (humanChoice === "scissors" && computerChoice === "paper"){
                return (
                    console.log("Congrats! You won!"),
                    console.log("Your score:",  ++humanScore))
        
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
                return console.log("Tie!")

        }  else if (humanChoice === "scissors" && computerChoice === "rock"){
                return (
                    console.log("You lose!"),
                    console.log("Computer score:",  ++computerScore)
            )
}
        }

        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
        getResults();
}
playGame()
