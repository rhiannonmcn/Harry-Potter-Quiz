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



let quizLength = 9;
let currentQuestionIndex;
let randomQuestions; //value defined by areYouReady function
let difficultyChosen; //value defined in runQuiz function
let selectedAnswer; //value definied in checkAnswer function

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

    quizStartScreen.classList.add("hide");
    quizQuestionsScreen.classList.remove("hide");
    currentQuestionIndex=0;
    renderQuestions(randomQuestions[currentQuestionIndex]); //renders the first question
    nextBtn = document.getElementById('next-question-btn');
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex >= quizLength){
            quizQuestionsScreen.classList.add('hide');
            quizResultsScreen.classList.remove('hide');
        } else {
        currentQuestionIndex++;
        renderQuestions(randomQuestions[currentQuestionIndex]);
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
}

//function to check for correct answer

function checkAnswer(event){
    let selectedButton = event.target;
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
        console.log('you are right');
    } else {
        selectedButton.classList.add('wrong');


        console.log('you are wrong');
    }
    
}
//function to increment score

function incrementScore(){

}

