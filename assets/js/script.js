const easyDifficultyBtn = document.getElementById("easy-difficulty-btn");
const mediumDifficultyBtn = document.getElementById("medium-difficulty-btn");
const hardDifficultyBtn = document.getElementById("hard-difficulty-btn");
const startBtn = document.getElementById('start-btn');
const quizDifficultyScreen = document.getElementById('quiz-difficulty-section');
const quizStartScreen = document.getElementById('quiz-start-section');
const quizQuestionsScreen = document.getElementById('quiz-questions');
const quizResultsScreen = document.getElementById('quiz-results-section');
const questionElement = document.getElementById('question');
const answerButton1 = document.getElementById('answer-btn-1');
const answerButton2 = document.getElementById('answer-btn-2');
const answerButton3 = document.getElementById('answer-btn-3');
const answerButton4 = document.getElementById('answer-btn-4');



let quizLength = 9;
let currentQuestionIndex;
let randomQuestions; //value defined by areYouReady function
let difficultyChosen; //value defined in runQuiz function

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
}

//function to check for correct answer

function checkAnswer(){

}

//function to increment score

function incrementScore(){

}

