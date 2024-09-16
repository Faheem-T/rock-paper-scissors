let choices = ["rock", "paper", "scissors"];

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
            return "draw";

        case "rock":
            switch(humanChoice) {
                case "paper":
                    console.log(`You win!. ${humanChoice} beats ${computerChoice}.`);
                    return "human";
                case "scissors":
                    console.log(`You lose!. ${computerChoice} beats ${humanChoice}.`);
                    return "computer";
            }
            break;

        case "scissors":
            switch(humanChoice) {
                case "paper":
                    console.log(`You lose!. ${computerChoice} beats ${humanChoice}.`);
                    return "computer";
                case "rock":
                    console.log(`You win!. ${humanChoice} beats ${computerChoice}.`);
                    return "human";
            }
            break;

        case "paper":
            switch(humanChoice) {
                case "scissors":
                    console.log(`You win!. ${humanChoice} beats ${computerChoice}.`);
                    return "human";
                case "rock":
                    console.log(`You lose!. ${computerChoice} beats ${humanChoice}.`);
                    return "computer";
            }
            break;

    }
}


function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let winner;
    for (let i = 0; i < 5; i++) {
        winner = playRound(getComputerChoice(), getHumanChoice());
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }

    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    if (humanScore === computerScore) {
        console.log("Thats a draw...");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose...");
    }
}

playGame();