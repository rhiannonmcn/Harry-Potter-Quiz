//Variables
const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const homeButtonHighScores = document.getElementById('play-again-button-highscores');
const highScores = JSON.parse(localStorage.getItem('highscores')) || []; // variable that creates an array for the most recent high scores
const highScoresList = document.getElementById('high-scores-list');

//Event Listeners
/**
 * When the home button is clicked it takes the user back to the start page and resets variables.
 * It also runs the buttonSoundEffects function to give the sound effect when the button is clicked
 */
homeButtonHighScores.addEventListener('click', () => {
    buttonSoundEffects();
    enterQuiz.classList.remove('hide');
    quizHighScoresScreen.classList.add('hide');
    clearInterval(timer);
    resetQuestionState();
    currentQuestionIndex = 0;
    questionNumber = 1;
    randomQuestions = undefined;
    difficultyChosen = undefined;
    selectedButton = undefined;
    userScore = 0;
    correctQuestions = 0;
    timeLeft = undefined;
    timer = undefined;
    userResult.innerText = 0;
    questionNumberDisplayed.innerText = questionNumber + '/' + '10';
});

/**
 * When the save button is clicked it loops through to see if the username input has a value
 * If it doesn't and the user clicks save, it sets a custom validity telling the user the issue
 * If it does it calls the buttonSoundEffects function, removes and adds hide classes to screens
 * And calls the saveHighScore function to run
 */
saveButton.addEventListener('click', () => {
    if (!username.value) {
        username.setCustomValidity('To save score, please enter a username');
    } else {
        buttonSoundEffects();
        username.setCustomValidity("");
        quizResultsScreen.classList.add('hide');
        quizHighScoresScreen.classList.remove('hide');
        saveHighScore();
    }
    username.reportValidity();
});

/**
 * Takes the value of the userScore and the value of the username input at the end of the quiz to create an array
 * Array is pushed, then sorted and spliced to the const highScores which uses local storage
 * Value of highScores is then converted via map to display in the relevant html
 */
function saveHighScore() {

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