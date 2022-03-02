//Variables
const questionRightSound = new Audio("assets/sounds/right-sound.mp3");
const questionWrongSound = new Audio("assets/sounds/wrong-sound.mp3");
const buttonClick = new Audio("assets/sounds/button-click.mp3");
const backgroundMusic = new Audio("assets/sounds/background-music.mp3");
const timerSounds = new Audio("assets/sounds/timer-clicks.mp3");
const audioOnButton = document.getElementsByClassName("audio-on");
const audioOffButton = document.getElementsByClassName("audio-off");
let audioIconButton = document.getElementsByClassName('audio-icon-button');

/**
 * Create an event listener for each of the audio icon buttons by looping through them.
 */
for (let i = 0; i < audioIconButton.length; i++) {
    audioIconButton[i].addEventListener('click', () => {
        toggleAudio();
    });
}

/**
 * Let's the player choose to have sounds on or not
 * Loops through the audio buttons if sound is playing and adds the appropriate class in html
 * Loops through the audio buttons if soumd is not playing and adds the appropriate class in html
 */
function toggleAudio() {
    audioPlaying ? toggleAudioOff() : toggleAudioOn();
}

/**
 * If audioPlaying is true, update the audio button by looping through each of the buttons and adding the classlist accordingly
 * Play the background music immediately, set the volume and loop it through
 */
function toggleAudioOn() {
    audioPlaying = true;
    for (let i = 0; i < audioOnButton.length && audioOffButton.length; i++) {
        audioOnButton[i].classList.remove('hide');
        audioOffButton[i].classList.add('hide');
        backgroundMusic.volume = 0.1;
        backgroundMusic.play();
        //loop the background audio
        backgroundMusic.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}

/**
 * If audioPlaying is false, update the audio button accordingly
 * Looping through each of the audio buttons on the screens and adding the claslist accordingly
 * pause the background music
 */
function toggleAudioOff() {
    audioPlaying = false;
    for (let i = 0; i < audioOnButton.length && audioOffButton.length; i++) {
        audioOnButton[i].classList.add('hide');
        audioOffButton[i].classList.remove('hide');
        backgroundMusic.pause();
    }
}

/**
 * Gets the sound for when a player clicks a button if sound is on otherwise it pauses it
 */
function buttonSoundEffects() {
    if (audioPlaying) {
        buttonClick.play();
        buttonClick.volume = 0.3;
    } else {
        buttonClick.pause();
    }
}

/**
 * Gets the sound for when a player gets a right answer if sound is on otherwise it pauses it
 */
function rightSoundEffects() {
    if (audioPlaying) {
        rightSoundEffects.volume = 0.3;
        questionRightSound.play();
    } else {
        questionRightSound.pause();
    }
}

/**
 * Gets the sound for when a player gets a wrong answer if sound is on otherwise it pauses it
 */
function wrongSoundEffects() {
    if (audioPlaying) {
        wrongSoundEffects.volume = 0.3;
        questionWrongSound.play();
    } else {
        questionWrongSound.pause();
    }
}
