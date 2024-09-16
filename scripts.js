let choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
    // Get input from user
    let humanChoice = prompt("Enter choice (rock, paper or scissors)");
    // Converting input to lowercase
    humanChoice = humanChoice.toLowerCase();
    // Keep asking for correct input until the user enters a valid input
    while (!(choices.includes(humanChoice))) {
        alert("Invalid choice!")
        humanChoice = prompt("Enter choice (rock, paper or scissors)");
    }
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    switch(computerChoice) {
        case humanChoice:
            console.log(`Thats a draw!`);
            break;

        case "rock":
            switch(humanChoice) {
                case "paper":
                    humanScore++;
                    console.log(`You win!. ${humanChoice} beats ${computerChoice}.`);
                    break;
                case "scissors":
                    computerScore++;
                    console.log(`You lose!. ${computerChoice} beats ${humanChoice}.`);
                    break;
            }
            break;

        case "scissors":
            switch(humanChoice) {
                case "paper":
                    computerScore++;
                    console.log(`You lose!. ${computerChoice} beats ${humanChoice}.`);
                    break;
                case "rock":
                    humanScore++;
                    console.log(`You win!. ${humanChoice} beats ${computerChoice}.`);
                    break;
            }
            break;

        case "paper":
            switch(humanChoice) {
                case "scissors":
                    humanScore++;
                    console.log(`You win!. ${humanChoice} beats ${computerChoice}.`);
                    break;
                case "rock":
                    computerScore++;
                    console.log(`You lose!. ${computerChoice} beats ${humanChoice}.`);
                    break;
            }
            break;

    }
}

playRound(getComputerChoice(), getHumanChoice());