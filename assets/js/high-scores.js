//Variables
const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const playButtonHighScores = document.getElementById('play-again-button-highscores');
const highScores = JSON.parse(localStorage.getItem('highscores')) || []; // variable that creates an array for the most recent high scores
const userRecentScore = localStorage.getItem('userRecentScore');
const highScoresList = document.getElementById('high-scores-list');

//Event Listeners
playButtonHighScores.addEventListener('click', () => {
    quizDifficultyScreen.classList.remove('hide');
    quizHighScoresScreen.classList.add('hide');
    window.location.reload();
    resetQuestionState();
})
username.addEventListener('keyup', () => {
    // disables save button from being pressed if there is not a value in the username
    saveButton.disabled = !username.value;
});

/**
 * 
 * @param {*} event 
 */
function saveHighScore(event) {
    event.preventDefault();

    quizResultsScreen.classList.add('hide');
    quizHighScoresScreen.classList.remove('hide');

    //add our array value to highScores variable
    const storedHighScore = {
        score: userRecentScore,
        name: username.value
    };
    highScores.push(storedHighScore);
    highScores.sort((one, two) => two.score - one.score); //sorts score in descending order
    highScores.splice(5);
    localStorage.setItem("highscores", JSON.stringify(highScores));

    //takes our highScore array and converts it to a string html
    highScoresList.innerHTML = highScores.map(highScores => {
        return `<li class="high-score">${highScores.name} - ${highScores.score}</li>`;
    }).join("");
    console.log(highScores);
}