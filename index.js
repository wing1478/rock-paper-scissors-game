
playerScore = 0
cpuScore = 0


// function that generates random num for the cpu

function  getComputerChoice(){
    let options= Math.floor(Math.random()* 3)
    if (options === 0) {return ("Rock")}
        else if (options === 1) { return ("Paper")}
        else return("Scissors")
}


// prompt for how many rounds
let rounds = parseInt(prompt("First to how many points wins? : "))



function playRound() {

    let playerSelection = prompt("Choose between Rock, Paper, or Scissors:  ");
    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === "rock" && computerSelection == "Rock"){return alert("You Draw! Try Again")}
        else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Paper" ) {return alert("You Lose! Paper Beats Rock"), cpuScore++}
        else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Scissors" ) {return alert("You Win! Rock Beats Scissors"), playerScore++}

        else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Rock" ) {return alert("You Win! Paper Beats Rock"), playerScore++}
        else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Paper" ) {return alert("You Draw! Try Again")}
        else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Scissors" ) {return alert("You Lose! Scissors Beats Paper"), cpuScore++}

        else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Rock" ) {return alert("You Lose! Rock Beats Scissors"), cpuScore++}
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Paper" ) {return alert("You Win! Scissors Beats Paper"), playerScore++}
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Scissors" ) {return alert("You Draw! Try Again")}
        
    else return alert (" OH GOD! Something went HORRIBLY wrong! :c")
  }
function end(){
    if (cpuScore>playerScore) {
        alert("You Lose! Better luck next time!")
    }
    else if ( playerScore > cpuScore){
        alert("You Win!!! Congratulations!!!")
    }
}
  
function game(rounds){
    playRound()
    
    if (playerScore < rounds && cpuScore < rounds){
        alert( "Player :" + playerScore + "\n"+ "CPU:" + cpuScore )
        game(rounds)
    }
    else{ 
        end()
    }
}

game(rounds)
