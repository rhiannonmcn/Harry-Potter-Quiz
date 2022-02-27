const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const highScores = JSON.parse(localStorage.getItem('highscores')) || []; // variable that creates an array for the most recent high scores
const userRecentScore = localStorage.getItem('userRecentScore');
const maxHighScores = 5;

username.addEventListener('keyup', () => {
    // disables save button from being pressed if there is not a value in the username
    saveButton.disabled = !username.value;
});

function saveHighScore(event) {
    event.preventDefault();
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
    
}