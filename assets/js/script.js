//Variables
const easyDifficultyBtn = document.getElementById("easy-difficulty-btn");
const mediumDifficultyBtn = document.getElementById("medium-difficulty-btn");
const hardDifficultyBtn = document.getElementById("hard-difficulty-btn");
const startBtn = document.getElementById('start-btn');
const quizDifficultyScreen = document.getElementById('quiz-difficulty-section');
const quizStartScreen = document.getElementById('quiz-start-section');
const quizQuestionsScreen = document.getElementById('quiz-questions');
const quizResultsScreen = document.getElementById('quiz-results-section');
const quizHighScoresScreen = document.getElementById('highscores-section');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btn-container');
const answerButton1 = document.getElementById('answer-btn-1');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton4 = document.getElementById('answer-btn-4');
const userResult = document.getElementById("user-score");
const timerElement = document.getElementById('timer');
const nextBtn = document.getElementById('next-question-btn');
const questionNumberDisplayed = document.getElementById("question-nbr");
const playButton = document.getElementById('play-again-button');
const userFinalScore = document.getElementById("user-result");
const userCorrectQuestions = document.getElementById('user-result-text');

let currentQuestionIndex;
let questionNumber = 0; // question number displayed out of 10 displayed as quiz is run
let randomQuestions; //value defined by areYouReady function
let difficultyChosen; //value defined in runQuiz function
let selectedButton; //value definied in checkAnswer function
let userScore = 0;
let correctQuestions = 0; //value defined by increment score function 
let timeLeft; //value defined in timer.js
let timer; //value defined in timer.js

//Event listeners
startBtn.addEventListener('click', runQuiz);
easyDifficultyBtn.addEventListener("click", chooseDifficulty);
mediumDifficultyBtn.addEventListener("click", chooseDifficulty);
hardDifficultyBtn.addEventListener("click", chooseDifficulty);

/**
 * Depending on the user's choice of difficulty this function shuffles the questions randomly
 * Creates the question pool for the user
 * removes the difficulty screen and shows the start screen
 * @param {target the user's button click} event 
 */
function chooseDifficulty(event) {

    quizDifficultyScreen.classList.add("hide");
    quizStartScreen.classList.remove("hide");
    let target = event.target;
    if (target.id === "easy-difficulty-btn") {
        randomQuestions = easyQuestions.sort(() => Math.random() - 0.5);
    } else if (target.id === "medium-difficulty-btn") {
        randomQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
        console.log('you have picked medium');
    } else if (target.id === "hard-difficulty-btn") {
        randomQuestions = hardQuestions.sort(() => Math.random() - 0.5);
    }
}

/**
 * This function starts the quiz by removing the start screen and showing the questions screen
 * It calls the renderQuestions() with parameters to display the first question of the current question pool index
 * On the next button click it checks if the current question index is greater than or less than 10 questions
 * It will loop through the question index until 10 questions
 * It will then hide the question screen and load the results screen
 */
function runQuiz() {
    let quizLength = 9;
    quizStartScreen.classList.add("hide");
    quizQuestionsScreen.classList.remove("hide");
    currentQuestionIndex = 0;
    renderQuestions(randomQuestions[currentQuestionIndex]); //renders the first question
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex >= quizLength) {
            quizQuestionsScreen.classList.add('hide');
            quizResultsScreen.classList.remove('hide');
            userCorrectQuestions.innerText = `You got ${correctQuestions}/10. Your score is`;
            userFinalScore.innerText = userScore;
            saveButton.addEventListener('click', (saveHighScore));
            localStorage.setItem('userRecentScore', userScore);
            playButton.addEventListener('click', () => {
                quizResultsScreen.classList.add('hide');
                quizDifficultyScreen.classList.remove('hide');
                window.location.reload();
            })
            
        } else {
            currentQuestionIndex++;
            renderQuestions(randomQuestions[currentQuestionIndex]);
            resetQuestionState(); //resets question state once next button click
        }
    });
}

/**
 * Displays the question and answer text in the html
 * Once an answer is clicked, calls the checkAnswer function
 * Disables the next button functionality until an answer is chosen
 * increments the displayed question number in the html
 * startTimer function is called once the question is called 
 * @param {*} question 
 */
function renderQuestions(question) {
    questionElement.innerText = question.question;
    answerButton1.innerText = question.answers[0].text;
    answerButton2.innerText = question.answers[1].text;
    answerButton3.innerText = question.answers[2].text;
    answerButton4.innerText = question.answers[3].text;
    answerButton1.onclick = checkAnswer;
    answerButton2.onclick = checkAnswer;
    answerButton3.onclick = checkAnswer;
    answerButton4.onclick = checkAnswer;
    startTimer();
    nextBtn.classList.remove("next-btn-hover");
    nextBtn.setAttribute("disabled", "disabled");
    questionNumber++;
    questionNumberDisplayed.innerText = questionNumber + '/' + '10';

}

/**
 * Checks the user's button click text value against the text value of the correct answer of the current question
 * If it is equal it means answer is correct and calls incrementScore() and stops the timer and adds a green background to correct answer
 * If it is not equal the answer is wrong, stops timer and addds a red background to the answer
 * Disables the answers button hover effects and ability to choose another answer once button is clicked
 * Enables the next buttons hover effects and ability to be clicked on once answer button is clicked
 * @param {target the user's button click} event 
 */

function checkAnswer(event) {

    selectedButton = event.target;
    let userAnswer = selectedButton.innerText;
    let rightAnswer = randomQuestions[currentQuestionIndex].correctAnswer;

    //disable hover effects once answer is clicked
    answerButton1.classList.remove("answer-btn-hover");
    answerButton2.classList.remove("answer-btn-hover");
    answerButton3.classList.remove("answer-btn-hover");
    answerButton4.classList.remove("answer-btn-hover");
    //disable the ability to click on answer buttons once user picks their answer
    answerButton1.setAttribute("disabled", "disabled");
    answerButton2.setAttribute("disabled", "disabled");
    answerButton3.setAttribute("disabled", "disabled");
    answerButton4.setAttribute("disabled", "disabled");

    if (userAnswer === rightAnswer) {
        selectedButton.classList.add('correct');
        incrementScore();
        clearInterval(timer);
    } else {
        selectedButton.classList.add('wrong');
        if (answerButton1.innerText === rightAnswer) {
            answerButton1.classList.add('correct');
        } else if (answerButton2.innerText === rightAnswer) {
            answerButton2.classList.add('correct');
        } else if (answerButton3.innerText === rightAnswer) {
            answerButton3.classList.add('correct');
        } else if (answerButton4.innerText === rightAnswer) {
            answerButton4.classList.add('correct');
        }

        //Subtracts from user score depending on the difficulty chosen if user gets answer wrong
        if (randomQuestions === mediumQuestions) {
            userResult.innerText = userScore -= 3;
        } else if (randomQuestions === hardQuestions) {
            userResult.innerText = userScore -= 5;
        }

        clearInterval(timer);
    }

    nextBtn.classList.add("next-btn-hover");
    nextBtn.removeAttribute("disabled", "disabled");
}

/**
 * Resets the question button states once called upon
 * Answer button hover effects enabled again as well as the ability to click the answer button
 */

function resetQuestionState() {
    selectedButton.classList.remove('correct');
    selectedButton.classList.remove('wrong');
    //enable hover effects 
    answerButton1.classList.add("answer-btn-hover");
    answerButton2.classList.add("answer-btn-hover");
    answerButton3.classList.add("answer-btn-hover");
    answerButton4.classList.add("answer-btn-hover");
    //resets answer button attributes
    answerButton1.removeAttribute("disabled", "disabled");
    answerButton2.removeAttribute("disabled", "disabled");
    answerButton3.removeAttribute("disabled", "disabled");
    answerButton4.removeAttribute("disabled", "disabled");
    //resets answer button attributes if timer runs out
    let answerButtons = document.getElementsByClassName("answer-btn");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("correct");
        answerButtons[i].classList.remove("wrong");
    }
}

/**
 * Checks what difficulty questions is set for the user currently
 * Depending on the choice, the score is incremented by a certain value
 */
function incrementScore() {
    if (randomQuestions === easyQuestions) {
        userResult.innerText = userScore += 2;
        correctQuestions++;
    } else if (randomQuestions === mediumQuestions) {
        userResult.innerText = userScore += 5;
        correctQuestions++;
    } else if (randomQuestions === hardQuestions) {
        userResult.innerText = userScore +=2 + timeLeft;
        correctQuestions++;
    }
}