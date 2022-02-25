function startTimer() {
    timeLeft = 20; 
    timer = setInterval(function() {
        countdown();
        timerElement.innerText = timeLeft;
    }, 1000);
}


function countdown() {
    let answerButtons = document.getElementsByClassName("answer-btn");
    

    if (timeLeft === 0) {
        clearInterval(timer);
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
        let rightAnswer = randomQuestions[currentQuestionIndex].correctAnswer; //gets correct answer value from current question Index
        for (let i = 0; i < answerButtons.length; i++) { //loops through the answer buttons
            if (answerButtons[i].innerText === rightAnswer && timeLeft === 0) { // if the buttons inner text matches the correct answer and time = 0 turn green
              answerButtons[i].classList.add("correct");
            } else if (answerButtons[i].innerText !== rightAnswer && timeLeft === 0) { // if the buttons inner text does not match turn red
              answerButtons[i].classList.add("wrong");
            }
        }
    } else {
        timer.innerText = timeLeft;
        timeLeft -= 1;
    }
}