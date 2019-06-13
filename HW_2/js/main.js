//The Stone-Scissors-Paper Game
let btn = document.getElementById("play");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById(playerResult) {
    switch (playerResult) {
        case 1:
            return "Stone"
            break;
        case 2:
            return "Scissors"
            break;
        case 3:
            return "Paper"
            break;
    }

}

function determineWinner(playerResult1, playerResult2) {
    if ((playerResult1 === 1 && playerResult2 === 2) ||
        (playerResult1 === 2 && playerResult2 === 3) ||
        (playerResult1 === 3 && playerResult2 === 1)) {
        return 1;
    }
    else if (playerResult1 === playerResult2) {
        return 0;
    }
    else {
        return 2;
    }

}

// Print result
function printResult(winner, id = "result") {
    let divId = document.getElementById(id);
    switch (winner) {
        case 0:
            divId.innerHTML = "Results are equal. You should restart a game";
            break;
        case 1:
            divId.innerHTML = "Player ONE is a winner";
            break;
        case 2:
            divId.innerHTML = "Player TWO is a winner";
            break;
    }
}

function runGame() {
    let resultPlayer1 = getPlayerResult();
    let resultPlayer2 = getPlayerResult();
    player1.innerHTML = getNameById(resultPlayer1);
    player2.innerHTML = getNameById(resultPlayer2);

    printResult(determineWinner(resultPlayer1, resultPlayer2));
}

btn.addEventListener("click", runGame);