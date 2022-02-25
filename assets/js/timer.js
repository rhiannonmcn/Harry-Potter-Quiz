function startTimer() {
    timeLeft = 20; 
    timer = setInterval(function() {
        countdown();
        timerElement.innerText = timeLeft;
    }, 1000);
}


function countdown() {
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
    } else {
        timer.innerText = timeLeft;
        timeLeft -= 1;
    }
}