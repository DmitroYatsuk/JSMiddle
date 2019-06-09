var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}


function runGame() {
    
    player1.innerHTML = getPlayerResult();
    player2.innerHTML = getPlayerResult();
    
    
}



btn.addEventListener("click", runGame);