function startTimer() {

    if (randomQuestions === easyQuestions) {
        timeLeft = 20;
    } else if (randomQuestions === mediumQuestions) {
        timeLeft = 15;
    } else if (randomQuestions === hardQuestions) {
        timeLeft = 10;
    }
    timeLeft;
    timer = setInterval(function () {
        timerElement.innerText = timeLeft + 's';
        countdown();
    }, 1000);
}


function countdown() {
    let answerButtons = document.getElementsByClassName("answer-btn");

    if (timeLeft <= 20 && timeLeft >= 11) {
        timerSounds.pause();
        timerElement.style.color = '#fff9e6';
    } else if (timeLeft < 11) {
        timerSounds.play();
        timerElement.style.color = 'gold';
    }

    if (timeLeft === 0) {
        timerSounds.pause();
        wrongSoundEffects();
        clearInterval(timer);
        nextBtn.classList.add("next-btn-hover");
        nextBtn.removeAttribute("disabled", "disabled");
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
        //If user lets timer run down, subtract from user score depending on difficulty chosen
        if (randomQuestions === mediumQuestions) {
            userResult.innerText = userScore -= 3;
        } else if (randomQuestions === hardQuestions) {
            userResult.innerText = userScore -= 5;
        }
    } else {
        timeLeft--;
    }

    let rightAnswer = randomQuestions[currentQuestionIndex].correctAnswer; //gets correct answer value from current question Index

    for (let i = 0; i < answerButtons.length; i++) { //loops through the answer buttons
        if (answerButtons[i].innerText === rightAnswer && timeLeft === 0) { // if the buttons inner text matches the correct answer and time = 0 turn green
            answerButtons[i].classList.add("correct");
        } else if (answerButtons[i].innerText !== rightAnswer && timeLeft === 0) { // if the buttons inner text does not match turn red
            answerButtons[i].classList.add("wrong");
        }
    }
}