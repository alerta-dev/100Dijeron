let team1Points = 0;
let team2Points = 0;
let team1Errors = 0;
let team2Errors = 0;

function showAnswer(answerNumber, text, points) {
    document.getElementById(`answer${answerNumber}`).textContent = `${answerNumber}. ${text}`;
}

function addError(team, count) {
    const errorsDiv = document.getElementById(`${team}-errors`);
    errorsDiv.textContent = 'X'.repeat(count);
}

function addPoints(team, points) {
    if (team === 'team1') {
        team1Points += points;
        document.getElementById('team1-points').textContent = team1Points;
    } else {
        team2Points += points;
        document.getElementById('team2-points').textContent = team2Points;
    }
}

function subtractPoints(team, points) {
    if (team === 'team1') {
        team1Points = Math.max(0, team1Points - points);
        document.getElementById('team1-points').textContent = team1Points;
    } else {
        team2Points = Math.max(0, team2Points - points);
        document.getElementById('team2-points').textContent = team2Points;
    }
}
