//Variables
const enterQuiz = document.getElementById('quiz-home-section');
const enterQuizBtn = document.getElementById('quiz-button');
const highScoresBtn = document.getElementById('highscores-btn');
const easyDifficultyBtn = document.getElementById("easy-difficulty-btn");
const mediumDifficultyBtn = document.getElementById("medium-difficulty-btn");
const hardDifficultyBtn = document.getElementById("hard-difficulty-btn");
const startBtn = document.getElementById('start-btn');
const quizDifficultyScreen = document.getElementById('quiz-difficulty-section');
const quizStartScreen = document.getElementById('quiz-start-section');
const quizQuestionsScreen = document.getElementById('quiz-questions');
const quizResultsScreen = document.getElementById('quiz-results-section');
const quizHighScoresScreen = document.getElementById('highscores-section');
const rulesScreen = document.getElementById('rules');
const questionElement = document.getElementById('question');
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
const homeButtonIcon = document.getElementsByClassName('home-button');
const rulesButton = document.getElementById('rules-btn');

let currentQuestionIndex;
let questionNumber = 0; // question number displayed out of 10 displayed as quiz is run
let randomQuestions; //value defined by areYouReady function
let difficultyChosen; //value defined in runQuiz function
let selectedButton; //value definied in checkAnswer function
let userScore = 0;
let correctQuestions = 0; //value defined by increment score function 
let timeLeft; //value defined in timer.js
let timer; //value defined in timer.js
let audioPlaying = true;

//Event listeners
/**
 * Listens for the click of the Quiz button on home screen
 * runs buttonSoundeffects function
 * adds and removes class hide to move to the next screen
 */
enterQuizBtn.addEventListener('click', () => {
    buttonSoundEffects();
    enterQuiz.classList.add("hide");
    quizDifficultyScreen.classList.remove("hide");
});

/**
 * Listens for the click of the Highscores button on the home screen
 * runs the buttonSoundEffects function
 * adds and removes classlist hide to go to the highscores screen
 * maps the highscores store in local storage
 */
highScoresBtn.addEventListener('click', () => {
    buttonSoundEffects();
    enterQuiz.classList.add("hide");
    quizHighScoresScreen.classList.remove("hide");
    highScoresList.innerHTML = highScores.map(highScores => {
        return `<li class="high-score">${highScores.name} - ${highScores.score}</li>`;
    }).join("");
});

/**
 * Listens for the click on the rules button on the home screen
 * adds and removes the hide class to show the rules screen
 */
rulesButton.addEventListener('click', () =>{
    enterQuiz.classList.add("hide");
    rulesScreen.classList.remove("hide");
});

/**
 * Loops through all the home button icons (info-bar) and adds an event listenter to them
 * On click it brings the user back to the home screen
 */
for (let i = 0; i < homeButtonIcon.length; i++) {
    homeButtonIcon[i].addEventListener('click', () => {
        window.location.reload();
    });
}

/**
 * Listens for the button clicks on the easy(troll), medium(O.W.L.) and hard(N.E.W.T.) difficulty buttons
 * runs the choose difficulty function
 */
 easyDifficultyBtn.addEventListener("click", chooseDifficulty);
 mediumDifficultyBtn.addEventListener("click", chooseDifficulty);
 hardDifficultyBtn.addEventListener("click", chooseDifficulty);

/**
 * Listens for the click of the start button on the start quiz screen
 * runs the buttonSoundEffects function
 * runs the runQuiz function
 */
startBtn.addEventListener('click', () => {
    buttonSoundEffects();
    runQuiz();
});

/**
 * Depending on the user's choice of difficulty this function shuffles the questions randomly
 * Creates the question pool for the user
 * removes the difficulty screen and shows the start screen
 * @param {target the user's button click} event 
 */
function chooseDifficulty(event) {

    quizDifficultyScreen.classList.add("hide");
    quizStartScreen.classList.remove("hide");
    buttonSoundEffects();
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
    renderQuestion(randomQuestions[currentQuestionIndex]); //renders the first question
    nextBtn.addEventListener('click', () => {
        buttonSoundEffects();
        if (currentQuestionIndex >= quizLength) {
            quizQuestionsScreen.classList.add('hide');
            quizResultsScreen.classList.remove('hide');
            userCorrectQuestions.innerText = `You got ${correctQuestions}/10. Your score is`;
            userFinalScore.innerText = userScore;
            playButton.addEventListener('click', () => {
                buttonSoundEffects(); //Sound not playing when clicked. reload too fast? 
                window.location.reload();
            });
        } else {
            currentQuestionIndex++;
            renderQuestion(randomQuestions[currentQuestionIndex]);
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
 * @param {current object} question 
 */
function renderQuestion(question) {
    questionElement.innerText = question.question;
    answerButton1.innerText = question.answers[0].text;
    answerButton2.innerText = question.answers[1].text;
    answerButton3.innerText = question.answers[2].text;
    answerButton4.innerText = question.answers[3].text;
    let ansBtnContainer = document.getElementById('ans-btn-container');
    //randomises the order of which the answer buttons are shown
    for (let i = ansBtnContainer.children.length; i >= 0; i--) {
        ansBtnContainer.appendChild(ansBtnContainer.children[Math.random() * i | 0]);
    }
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
 * If it is not equal the answer is wrong, stops timer and addds a red background to the answer and depending on user difficulty subtracts a penalty from user score
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
        rightSoundEffects();
        incrementScore();
        clearInterval(timer);
        if (audioPlaying && timeLeft < 7) {
            timerSounds.pause();
        }
    } else {
        selectedButton.classList.add('wrong');
        wrongSoundEffects();
        if (audioPlaying && timeLeft < 7) {
            timerSounds.pause();
        }
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
    //Bring back the functionality of the next button once answer is picked
    nextBtn.classList.add("next-btn-hover");
    nextBtn.removeAttribute("disabled", "disabled");
}

/**
 * Resets the question button states once called upon
 * Answer button hover effects enabled again as well as the ability to click the answer button
 */
function resetQuestionState() {
    //if the user selects a button remove the classes on buttons to reset questions
    if (selectedButton) {
        selectedButton.classList.remove('correct');
        selectedButton.classList.remove('wrong');
    }
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
 * Also increments the correctQuestions variable to be shown in the user result screen
 */
function incrementScore() {
    if (randomQuestions === easyQuestions) {
        userResult.innerText = userScore += 2;
        correctQuestions++;
    } else if (randomQuestions === mediumQuestions) {
        userResult.innerText = userScore += 5;
        correctQuestions++;
    } else if (randomQuestions === hardQuestions) {
        userResult.innerText = userScore += 2 + timeLeft;
        correctQuestions++;
    }
}