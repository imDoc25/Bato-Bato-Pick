//Computer Choice
const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];

}

//Player Choice
let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");
let resultDisplay = document.querySelector("#result");
let playerDisplayResult = document.querySelector("#playerScore");
let computerDisplayResult = document.querySelector("#computerScore");
let battleResult = document.querySelector("#winner");
let resetBattle = document.querySelector("#reset");

const getPlayerChoice = () =>{
if (rockChoice.addEventListener("click", (e) =>{
    playerSelection = "Rock"
    resultDisplay.textContent = playRound(playerSelection, getComputerChoice());
    playerDisplayResult.textContent = playerSelectionScore;
    computerDisplayResult.textContent = computerSelectionScore;
    if (playerSelectionScore == 5){
        battleResult.innerHTML = "<h2 class='alert alert-success'><strong>You Win!<strong></h2>";
        rockChoice.setAttribute("disabled", "true");
        paperChoice.setAttribute("disabled", "true");
        scissorsChoice.setAttribute("disabled", "true");
        resetBattle.innerHTML = "<button class='btn btn-primary btn-lg' id='resetBtn'>Play Again</button>";


        resetBattle.addEventListener("click", (e) => {
            rockChoice.removeAttribute("disabled");
            paperChoice.removeAttribute("disabled");
            scissorsChoice.removeAttribute("disabled");
            playerSelectionScore = 0; 
            computerSelectionScore = 0;
            playerDisplayResult.textContent = playerSelectionScore;
            computerDisplayResult.textContent = computerSelectionScore;
            resultDisplay.textContent = "";
            battleResult.textContent = "";
            resetBattle.textContent = "";
        })

    }else if (computerSelectionScore == 5){
        battleResult.innerHTML = "<h2 class='alert alert-danger'><strong>You Lose!<strong></h2>";
        rockChoice.setAttribute("disabled", "true");
        paperChoice.setAttribute("disabled", "true");
        scissorsChoice.setAttribute("disabled", "true");
        resetBattle.innerHTML = "<button class='btn btn-primary btn-lg' id='resetBtn'>Play Again</button>";
     

        resetBattle.addEventListener("click", (e) => {
            rockChoice.removeAttribute("disabled");
            paperChoice.removeAttribute("disabled");
            scissorsChoice.removeAttribute("disabled");
            playerSelectionScore = 0;
            computerSelectionScore = 0;
            playerDisplayResult.textContent = playerSelectionScore;
            computerDisplayResult.textContent = computerSelectionScore; 
            resultDisplay.textContent = "";
            battleResult.textContent = "";
            resetBattle.textContent = "";
        })
        
    }
}));
else if (paperChoice.addEventListener("click", (e) =>{
    playerSelection = "Paper"
    resultDisplay.textContent = playRound(playerSelection, getComputerChoice());
    playerDisplayResult.textContent = playerSelectionScore;
    computerDisplayResult.textContent = computerSelectionScore;
    battleResult.removeAttribute("disabled");
    if (playerSelectionScore == 5){
        battleResult.innerHTML = "<h2 class='alert alert-success'><strong>You Win!<strong></h2>";
        rockChoice.setAttribute("disabled", "true");
        paperChoice.setAttribute("disabled", "true");
        scissorsChoice.setAttribute("disabled", "true");
        resetBattle.innerHTML = "<button class='btn btn-primary btn-lg' id='resetBtn'>Play Again</button>";

        resetBattle.addEventListener("click", (e) => {
            rockChoice.removeAttribute("disabled");
            paperChoice.removeAttribute("disabled");
            scissorsChoice.removeAttribute("disabled");
            playerSelectionScore = 0; 
            computerSelectionScore = 0;
            playerDisplayResult.textContent = playerSelectionScore;
            computerDisplayResult.textContent = computerSelectionScore;
            resultDisplay.textContent = "";
            battleResult.textContent = "";
            resetBattle.textContent = "";
        })

    }else if (computerSelectionScore == 5){
        battleResult.innerHTML = "<h2 class='alert alert-danger'><strong>You Lose!<strong></h2>";
        rockChoice.setAttribute("disabled", "true");
        paperChoice.setAttribute("disabled", "true");
        scissorsChoice.setAttribute("disabled", "true");

        resetBattle.innerHTML = "<button class='btn btn-primary btn-lg' id='resetBtn'>Play Again</button>";
        resetBattle.addEventListener("click", (e) => {
            rockChoice.removeAttribute("disabled");
            paperChoice.removeAttribute("disabled");
            scissorsChoice.removeAttribute("disabled");
            playerSelectionScore = 0;
            computerSelectionScore = 0;
            playerDisplayResult.textContent = playerSelectionScore;
            computerDisplayResult.textContent = computerSelectionScore; 
            resultDisplay.textContent = "";
            battleResult.textContent = "";
            resetBattle.textContent = "";
        })
        
    }

}));
else if (scissorsChoice.addEventListener("click", (e) =>{
    playerSelection = "Scissors"
    resultDisplay.textContent = playRound(playerSelection, getComputerChoice());
    playerDisplayResult.textContent = playerSelectionScore;
    computerDisplayResult.textContent = computerSelectionScore;
    if (playerSelectionScore == 5){
        battleResult.innerHTML = "<h2 class='alert alert-success'><strong>You Win!<strong></h2>";
        rockChoice.setAttribute("disabled", "true");
        paperChoice.setAttribute("disabled", "true");
        scissorsChoice.setAttribute("disabled", "true");
        resetBattle.innerHTML = "<button class='btn btn-primary btn-lg' id='resetBtn'>Play Again</button>";

        resetBattle.addEventListener("click", (e) => {
            rockChoice.removeAttribute("disabled");
            paperChoice.removeAttribute("disabled");
            scissorsChoice.removeAttribute("disabled");
            playerSelectionScore = 0; 
            computerSelectionScore = 0;
            playerDisplayResult.textContent = playerSelectionScore;
            computerDisplayResult.textContent = computerSelectionScore;
            resultDisplay.textContent = "";
            battleResult.textContent = "";
            resetBattle.textContent = "";
        })

    }else if (computerSelectionScore == 5){
        battleResult.innerHTML = "<h2 class='alert alert-danger'><strong>You Lose!<strong></h2>";
        rockChoice.setAttribute("disabled", "true");
        paperChoice.setAttribute("disabled", "true");
        scissorsChoice.setAttribute("disabled", "true");
        resetBattle.innerHTML = "<button class='btn btn-primary btn-lg' id='resetBtn'>Play Again</button>";

        resetBattle.addEventListener("click", (e) => {
            rockChoice.removeAttribute("disabled");
            paperChoice.removeAttribute("disabled");
            scissorsChoice.removeAttribute("disabled");
            playerSelectionScore = 0;
            computerSelectionScore = 0;
            playerDisplayResult.textContent = playerSelectionScore;
            computerDisplayResult.textContent = computerSelectionScore; 
            resultDisplay.textContent = "";
            battleResult.textContent = "";
            resetBattle.textContent = "";
        })
        
    }

}));
}


let playerSelection = getPlayerChoice();
let playerSelectionScore = 0;
let computerSelection = getComputerChoice();
let computerSelectionScore = 0;

//Battle Result
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === "Rock" && computerSelection === "Rock"){
        return (`It's a Tie! ${playerSelection} ties ${computerSelection}`);
    }else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return (`It's a Tie! ${playerSelection} ties ${computerSelection}`);
    }else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return (`It's a Tie! ${playerSelection} ties ${computerSelection}`);
    }else if (playerSelection == "Rock" && computerSelection == "Paper"){
        computerSelectionScore++
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerSelectionScore++
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerSelectionScore++
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerSelectionScore++
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerSelectionScore++
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    }else {
        computerSelectionScore++
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    
}

console.log(playerSelection);
console.log(computerSelection);

const game = () => {
    for (let i = 0; i < 2; i++){
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

//console.log(game());

