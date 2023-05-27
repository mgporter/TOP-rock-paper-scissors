let compWin = 0;
let userWin = 0;

const getUserSelection = function() {
    return prompt("type in rock, paper, or scissors:")
}

const getCompChoice = function () {
    const choice = Math.floor((Math.random() * 3) + 1)
    console.log(choice)
    return choice
}

const nameToNum = function (name) {
    switch(name) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            return "ERROR";
    }
}

const numToName = function (num) {
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "ERROR";
    }
}

const playRound = function (round) {

    let userNum;

    while (userNum === "ERROR" || !userNum) {
        userChoice = getUserSelection();
        userNum = nameToNum(userChoice)
    }

    const compNum = getCompChoice();
    const compChoice = numToName(compNum);

    console.log(`Starting Round ${round}`)
    console.log(`The user has chosen ${userChoice} and the computer has chosen ${compChoice}`)
    
    const winningNum = userNum - compNum
    console.log("and the winner is...")

    if (winningNum === 0) {
        console.log('No one! It\'s a tie!')
    } else if (winningNum === -1 || winningNum === 2) {
        console.log("the computer!!")
        compWin++
    } else if (winningNum === 1 || winningNum -2) {
        console.log("the user!!")
        userWin++
    };

    return
}

const playGame = function() {
    const numRounds = prompt("How many rounds do you want to play?");

    if (typeof(+numRounds) == NaN) {
        console.log("that doesn't work")
        return
    }

    for (let i = 1; i <= +numRounds; i++) {
        playRound(i)
        console.log("======================================================")
        console.log(`The current score is user ${userWin} and computer ${compWin}`)
        console.log("======================================================")
    }

    if (userWin === compWin) {
        console.log("The game is a tie!");
    } else if (userWin > compWin) {
        console.log("The user wins the game!");
    } else {
        console.log("The computer wins the game!");
    }

    return
}

playGame()