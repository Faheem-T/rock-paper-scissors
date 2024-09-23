let choices = ["rock", "paper", "scissors"];

let humanPoint = 0;
let computerPoint = 0;

// selecting "results" div for playRound function to print results
const results = document.querySelector("#results");

function getComputerChoice() {
    // Get computer choice
    //  - Use Math.random() to select "rock", "paper" or "scissors"
    //  how?
    //      - Math.random() returns a number >= 0 and < 1
    //      - (Math.random() * 3).floor would give 0, 1 or 2
    
    let random = Math.floor((Math.random() * 3));
    
    // Now, use switch:
    //          1: "rock"
    //          2: "paper"
    //          3: "scissors"
    
    let computerChoice = choices[random];

    return computerChoice;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    switch(computerChoice) {
        case humanChoice:
            results.textContent = `Thats a draw!`;
            return "draw";

        case "rock":
            switch(humanChoice) {
                case "paper":
                    results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                    return "human";
                case "scissors":
                    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                    return "computer";
            }
            break;

        case "scissors":
            switch(humanChoice) {
                case "rock":
                    results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                    return "human";
                case "paper":
                    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                    return "computer";
            }
            break;

        case "paper":
            switch(humanChoice) {
                case "scissors":
                    results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                    return "human";
                case "rock":
                    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                    return "computer";
            }
            break;

    }
}

const finalResult = document.querySelector("#finalResult");

const scores = document.querySelector("#scores");

const bContainer = document.querySelector("#buttonContainer");
// Making use of event delegation
bContainer.addEventListener("click", function(event){
    const target = event.target;
    switch(playRound(target.id)) { 
        // playRound returns either "human" or "computer"
        case "human":
            humanPoint++;
            break;
        case "computer":
            computerPoint++;
            break;
    }

    scores.textContent = `YOU: ${humanPoint}\nCOMPUTER: ${computerPoint}`;

    if (humanPoint === 5) {
        finalResult.textContent = "You Win!!!";
        humanPoint = 0;
        computerPoint = 0;
        
    } else if (computerPoint === 5) {
        finalResult.textContent = "You lose :(";
        humanPoint = 0;
        computerPoint = 0;
    } else {
        finalResult.textContent = "";
    }
});