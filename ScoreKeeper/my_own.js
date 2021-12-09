const player1 = {
    score: 0,
    button: document.getElementById('button1'),
    display: document.querySelector('.p1score')
};

const player2 = {
    score: 0,
    button: document.getElementById('button2'),
    display: document.querySelector('.p2score')
};

const winByTwoBox = document.getElementById('win_by_two');
let winByTwoCondition = false;
const reset = document.getElementById('reset');
const playToScore = document.getElementById('play_to');
let winningScore = 3;
let gameOver = false;


player1.button.addEventListener('click', ()=>{
    console.log('in player1');
    updateScores(player1, player2)
})

player2.button.addEventListener('click', ()=>{
    console.log('in player2');
    updateScores(player2, player1)
})

playToScore.addEventListener('change', function(){//winningScore prints as NaN when function is
    winningScore = parseInt(this.value);          //made as an arrow function (weirdness with this)
    console.log(`winningScore is ${winningScore}`);
    resetGame();
})

reset.addEventListener('click', ()=> resetGame() );

winByTwoBox.addEventListener('change', ()=>{
    winByTwoCondition = !winByTwoCondition;
})

function updateScores(player, contender){
    winByTwoBox.disabled = true;
    player.score += 1;
    console.log(`player score is ${player.score}`);
    checkWinByTwo(player.score, contender.score);
    if(player.score === winningScore){
        console.log('INSIDE CONDITIONAL');
        gameOver = true;
        player.button.disabled = true;
        contender.button.disabled = true;
        player.display.classList.add('winner');
        contender.display.classList.add('loser');
    }
    player.display.textContent = player.score;
}

function checkWinByTwo(playerScore, contenderScore){
    if(winByTwoCondition && playerScore >= winningScore){
        winningScore = playerScore >= contenderScore + 2 ? winningScore : winningScore+1;
    }
}

function resetGame(){
    for(p of [player1, player2]){
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('winner', 'loser');
        gameOver = false;
    }
    winningScore = parseInt(playToScore.value);
    winByTwoBox.disabled = false;
}