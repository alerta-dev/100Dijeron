let team1Points = 0;
let team2Points = 0;
let team1Errors = 0;
let team2Errors = 0;

function showAnswer(answerNumber, text, points) {
    document.querySelector(`.answer:nth-child(${answerNumber}) .text`).textContent = text;
    document.querySelector(`.answer:nth-child(${answerNumber}) .points`).textContent = points;
}

function addError() {
    team1Errors++;
    document.getElementById('team1-errors').textContent = team1Errors;
}
