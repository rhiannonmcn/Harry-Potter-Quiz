
/**
 * If the current question set is equal to a certain difficulty alocate a certain amount of time  accordingly
 * Set it to countdown at 1 sec, run the countdown function and display the relevant time in the html
 */
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
        countdown();
        timerElement.innerText = timeLeft + 's';
    }, 1000);
}

/**
 * If audio is playing is true and the time is a certain amount of secounds, set styles, colours and sounds accordingly
 * If timer runs out (=== 0), call sound effects, disable answer buttons so they cant be clicked and enable next buttons
 * Depending on the user difficulty minus a certain amount of points from user score
 * loop through answer buttons and highlight the correct and wrong answers by adding the classlists accordingly
 */
function countdown() {
    if (audioPlaying && timeLeft <= 20 && timeLeft >= 7) {
        timerSounds.pause();
    } else if (audioPlaying && timeLeft < 7) {
        timerSounds.play();
    } else if (audioPlaying) {
        timerSounds.pause;
    }

    if (timeLeft <= 20 && timeLeft >= 7) {
        timerElement.style.color = '#fff9e6';
    } else {
        timerElement.style.color = 'gold';
    }
    
    if (timeLeft === 0) {
        if (audioPlaying) {
            timerSounds.pause();
        }
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
    let answerButtons = document.getElementsByClassName("answer-btn");
    let rightAnswer = randomQuestions[currentQuestionIndex].correctAnswer; //gets correct answer value from current question Index

    for (let i = 0; i < answerButtons.length; i++) { //loops through the answer buttons
        if (answerButtons[i].innerText === rightAnswer && timeLeft === 0) { // if the buttons inner text matches the correct answer and time = 0 turn green
            answerButtons[i].classList.add("correct");
        } else if (answerButtons[i].innerText !== rightAnswer && timeLeft === 0) { // if the buttons inner text does not match turn red
            answerButtons[i].classList.add("wrong");
        }
    }
}