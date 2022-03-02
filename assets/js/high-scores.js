//Variables
const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const playButtonHighScores = document.getElementById('play-again-button-highscores');
const highScores = JSON.parse(localStorage.getItem('highscores')) || []; // variable that creates an array for the most recent high scores
const highScoresList = document.getElementById('high-scores-list');

//Event Listeners
playButtonHighScores.addEventListener('click', () => {
    buttonSoundEffects();
    window.location.reload();
});
saveButton.addEventListener('click', saveHighScore);
username.addEventListener('keyup', () => {
    //disables save button from being pressed if there is not a value in the username
    saveButton.disabled = !username.value;    
});

/**
 * Takes the value of the userScore and the value of the username input at the end of the quiz to create an array
 * Array is pushed, then sorted and spliced to the const highScores which uses local storage
 * Value of highScores is then converted via map to display in the relevant html
 * @param {*Takes the users button click on Save Highscore} event 
 */
function saveHighScore(event) {
    event.preventDefault();
    buttonSoundEffects();

    quizResultsScreen.classList.add('hide');
    quizHighScoresScreen.classList.remove('hide');

    //add our array value to highScores variable
    const storedHighScore = {
        score: userScore,
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
}