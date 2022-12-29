// function that generates random num for the cpu

let options= Math.floor(Math.random()* 3)


function  getComputerChoice(num){
    if (num === 0) {return ("Rock")}
        else if (num === 1) { return ("Paper")}
        else return("Scissors")
    
}


// Prompt and function to run the game
let rounds = parseInt(prompt("Please enter the rounds you would like to play: "));


let playerSelection = prompt("Choose between Rock, Paper, or Scissors:  ");

const computerSelection = getComputerChoice(options);
playerScore = 0
cpuScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection == "Rock"){return alert("You Draw! Rock ties with Rock")}
        else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Paper" ) {return alert("You Lose! Paper Beats Rock"), cpuScore++}
        else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Scissors" ) {return alert("You Win! Rock Beats Scissors"), playerScore++}
        else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Rock" ) {return alert("You Win! Paper Beats Rock"), playerScore++}
        else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Paper" ) {return alert("You Draw! Paper ties with Paper")}
        else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Scissors" ) {return alert("You Lose! Scissors Beats Paper"), cpuScore++}
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Rock" ) {return alert("You Lose! Rock Beats Scissors"), cpuScore++}
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Paper" ) {return alert("You Win! Scissors Beats Paper"), playerScore++}
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Scissors" ) {return alert("You Draw! Scissors ties with Scissors")}
        
        else return alert (" OH GOD! Something went HORRIBLY wrong! :c")
  }
//playRound(playerSelection, computerSelection);
//console.log("The score is :" + playerScore + " for the player and:" + cpuScore + " for the CPU"
//);
function game(rounds){
    for (let i = 0; i <= rounds; i++) {
        playRound(playerSelection, computerSelection);
     }
     

  }
  game(rounds)
