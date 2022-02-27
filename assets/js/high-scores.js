//Variables
const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const playButtonHighScores = document.getElementById('play-again-button-highscores');
const highScores = JSON.parse(localStorage.getItem('highscores')) || []; // variable that creates an array for the most recent high scores
const userRecentScore = localStorage.getItem('userRecentScore');
const maxHighScores = 5;
const highScoresList = document.getElementById('high-scores-list');

//Event Listeners
playButtonHighScores.addEventListener('click', () => {
    quizDifficultyScreen.classList.remove('hide');
    quizHighScoresScreen.classList.add('hide');
})
username.addEventListener('keyup', () => {
    // disables save button from being pressed if there is not a value in the username
    saveButton.disabled = !username.value;
});

function saveHighScore(event) {
    event.preventDefault();

    quizResultsScreen.classList.add('hide');
    quizHighScoresScreen.classList.remove('hide');


    const score = {
        score: userScore,
        name: username.value
    }

    //adds the new score array to highscores variable created
    highScores.push(score);
    highScores.sort((a, b) => {
        return b.score - a.score;
    });
    highScores.splice(5);
    //updates the local storage with our highScore
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //takes our highScore array and converts it to a string html
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");
}