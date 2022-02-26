const easyDifficultyBtn = document.getElementById("easy-difficulty-btn");
const mediumDifficultyBtn = document.getElementById("medium-difficulty-btn");
const hardDifficultyBtn = document.getElementById("hard-difficulty-btn");
const startBtn = document.getElementById('start-btn');
const quizDifficultyScreen = document.getElementById('quiz-difficulty-section');
const quizStartScreen = document.getElementById('quiz-start-section');
const quizQuestionsScreen = document.getElementById('quiz-questions');
const quizResultsScreen = document.getElementById('quiz-results-section');
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

let currentQuestionIndex;
let questionNumber = 0; // question number displayed out of 10 displayed as quiz is run
let randomQuestions; //value defined by areYouReady function
let difficultyChosen; //value defined in runQuiz function
let selectedButton; //value definied in checkAnswer function
let userScore = 0; //value defined by increment score function 
let timeleft;
let timer;


//Event listeners

startBtn.addEventListener('click', runQuiz);
easyDifficultyBtn.addEventListener("click", chooseDifficulty);
mediumDifficultyBtn.addEventListener("click",chooseDifficulty);
hardDifficultyBtn.addEventListener("click", chooseDifficulty);

//function to store questions based on difficulty chosen and hide difficulty screen and go to the start screen

function chooseDifficulty(event){
   
    quizDifficultyScreen.classList.add("hide");
    quizStartScreen.classList.remove("hide");
    let target = event.target;
    if (target.id === "easy-difficulty-btn"){
        randomQuestions = easyQuestions.sort(() => Math.random() - 0.5);
    } else if (target.id === "medium-difficulty-btn"){
        randomQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
        console.log('you have picked medium');
    } else if (target.id === "hard-difficulty-btn"){
        randomQuestions = hardQuestions.sort(() => Math.random() - 0.5);
    }
}

//function to run quiz

function runQuiz() {
    let quizLength = 9;
    quizStartScreen.classList.add("hide");
    quizQuestionsScreen.classList.remove("hide");
    currentQuestionIndex = 0;
    renderQuestions(randomQuestions[currentQuestionIndex]); //renders the first question
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex >= quizLength){
            quizQuestionsScreen.classList.add('hide');
            quizResultsScreen.classList.remove('hide');
        } else {
        currentQuestionIndex++;
        renderQuestions(randomQuestions[currentQuestionIndex]);
        resetQuestionState(); //resets question state once next button click
        }
    });
}

//show quiz questions

function renderQuestions(question){
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

//function to check for correct answer

function checkAnswer(event){

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
    
    if (userAnswer === rightAnswer){
        selectedButton.classList.add('correct');
        incrementScore();
        clearInterval(timer);
        console.log('you are right');
    } else {
        selectedButton.classList.add('wrong');
        clearInterval(timer);
        console.log('you are wrong');
    }   

    nextBtn.classList.add("next-btn-hover");
    nextBtn.removeAttribute("disabled", "disabled");
}

//function to reset the question states on next button click

function resetQuestionState(){
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
//function to increment score

function incrementScore(){
    if (randomQuestions === easyQuestions){
        userResult.innerText = userScore += 1 ;
    } else if (randomQuestions === mediumQuestions){
        userResult.innerText = userScore += 2 ;
    } else if (randomQuestions === hardQuestions){
        userResult.innerText = userScore += 3 ;
    }
}
