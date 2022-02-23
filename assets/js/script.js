const easyDifficultyBtn = document.getElementById("easy-difficulty-btn");
const mediumDifficultyBtn = document.getElementById("medium-difficulty-btn");
const hardDifficultyBtn = document.getElementById("hard-difficulty-btn");
const startBtn = document.getElementById('start-btn');
const quizDifficultyScreen = document.getElementById('quiz-difficulty-section');
const quizStartScreen = document.getElementById('quiz-start-section');
const quizQuestionsScreen = document.getElementById('quiz-questions');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-btn-container');

let currentQuestionIndex;
let randomQuestions; //value defined by areYouReady function
let difficultyChosen; //value defined in runQuiz function

//Event listeners

startBtn.addEventListener('click', runQuiz);
easyDifficultyBtn.addEventListener("click", areYouReady);
mediumDifficultyBtn.addEventListener("click", areYouReady);
hardDifficultyBtn.addEventListener("click", areYouReady);

//function to store questions based on difficulty chosen and hide difficulty screen and go to the start screen

function areYouReady(event){
   
    quizDifficultyScreen.classList.add("hide");
    quizStartScreen.classList.remove("hide");

    let target = event.target;

    if (target.id === "easy-difficulty-btn"){
        randomQuestions = easyQuestions.sort(() => Math.random() - 0.5);
        console.log('you have picked easy');
        console.log(randomQuestions)
    } else if (target.id === "medium-difficulty-btn"){
        randomQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
        console.log('you have picked medium');
        console.log(randomQuestions)
    } else if (target.id === "hard-difficulty-btn"){
        randomQuestions = hardQuestions.sort(() => Math.random() - 0.5);
        console.log('you have picked hard');
        console.log(randomQuestions)
    }

}

//function to run quiz

function runQuiz() {
    
    console.log("quiz started");
    console.log(randomQuestions);

    quizStartScreen.classList.add("hide");
    quizQuestionsScreen.classList.remove("hide");
    currentQuestionIndex=0;
    nextQuestion();
}

//function to load next question

function nextQuestion(){
    showQuizQuestions(randomQuestions[currentQuestionIndex]);
}

//show quiz questions

function showQuizQuestions(question){
    questionElement.innerText = question.question;
}

//function to check for correct answer

function checkAnswer(){

}

//function to increment score

function incrementScore(){

}

