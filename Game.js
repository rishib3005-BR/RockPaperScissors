let container = document.querySelector('.container');
let weaponBox = document.querySelector('.weapons-box');
let playerChoicesBox = document.querySelector('.player-choices');
let weapons = weaponBox.querySelectorAll('.weapons div');

let player = playerChoicesBox.querySelector('.player-choice img');
let computer = playerChoicesBox.querySelector('.computer-choice img');

let resultBox = container.querySelector('.result-box');
let resultTxt = resultBox.querySelector('h3');
let playAgainBtn = resultBox.querySelector('button');

let wonValueTxt = document.querySelector('.score-box .won h3 span');
let lostValueTxt = document.querySelector('.score-box .lost h3 span');
let drawValueTxt = document.querySelector('.score-box .draw h3 span');

let won = 0;
let lost = 0;
let draw = 0;

let computerChoices = ["Rock", "Paper", "Scissors"];

let outcomes = {
    RockRock: "Draw",
    RockPaper: "Computer",
    RockScissors: "Players",
    PaperRock: "Players",
    PaperPaper: "Draw",
    PaperScissors: "Computer",
    ScissorsRock: "Computer",
    ScissorsPaper: "Players",
    ScissorsScissors: "Draw"
};

for(let i = 0; i < weapons.length; i++){

    weapons[i].addEventListener('click', (e) => {

        /*player.src = "images/Rock.png";
        computer.src = "images/Rock.png";
        */

        weaponBox.style.display = "none";
        playerChoicesBox.style.display = "block";

        setTimeout(() => {
            playerChoicesBox.classList.add('active');
        }, 1000);

        setTimeout(() => {

            let playerChoice = playerChoicesBox.querySelectorAll("div");

            for(let i = 0; i < playerChoice.length; i++){
                playerChoice[i].style.animationPlayState = "paused";
            }

            player.src = e.target.src;

            let randomchoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            computer.src = `./image/${randomchoice}.png`;

            let userChoice = e.target.parentElement.className;
            let outcomeValue = outcomes[userChoice + randomchoice];

            showResult(outcomeValue);

        }, 3000);

    });
}

let showResult = (result) => {

    // Implementation for showing result
    container.style.height = "415px";
    resultBox.style.display = "block";

    if(result === "Players"){
        resultTxt.innerHTML = "Congrats, you won &#x1F389;";
        won++;
        wonValueTxt.innerHTML = won;

    } else if(result === "Computer"){
        resultTxt.innerHTML = "Sorry, you lost &#x1F614;";
        lost++;
        lostValueTxt.innerHTML = lost;

    } else {
        resultTxt.innerHTML = "It's a draw &#x1F610;";
        draw++;
        drawValueTxt.innerHTML = draw;
    }

    let totalRounds = won + lost + draw;
    if(totalRounds == 5){
        if(won > lost){
            resultTxt.innerHTML = "You won the game! &#x1F389;";
        }else if(lost > won){
            resultTxt.innerHTML = "Computer won the game! &#x1F614;";
        }else{
            resultTxt.innerHTML = "It's a draw game! &#x1F610;";
        }
    }else if(totalRounds > 5){
        won = 0;
        lost = 0;
        draw = 0;
        wonValueTxt.innerHTML = won;
        lostValueTxt.innerHTML = lost;
        drawValueTxt.innerHTML = draw;
    }
}

playAgainBtn.addEventListener('click', () => {

    playerChoicesBox.classList.remove('active');
    container.style.height = "380px";

    resultBox.style.display = "none";
    weaponBox.style.display = "block";
    playerChoicesBox.style.display = "none";

    let playerChoice = playerChoicesBox.querySelectorAll("div");

    for(let i = 0; i < playerChoice.length; i++){
        playerChoice[i].style.animationPlayState = "running";
    }
});