const questionRightSound = new Audio("assets/sounds/right-sound.mp3");
const questionWrongSound = new Audio("assets/sounds/wrong-sound.mp3");
const buttonClick = new Audio("assets/sounds/button-click.mp3");
const backgroundMusic = new Audio("assets/sounds/background-music");
const audioOnButton = document.getElementsByClassName("audio-on");
const audioOffButton = document.getElementsByClassName("audio-off");
let audioPlaying = true;

/**
 * Let's the player choose to have sounds on or not
 * Loops through the audio buttons if sound is playing and adds the appropriate class in html
 * Loops through the audio buttons if soumd is not playing and adds the appropriate class in html
 */
function toggleAudio(){
    if(audioPlaying = true){
        for(let i =0; i < audioOnButton.length && audioOffButton.length; i++){
            audioOnButton[i].classList.remove('hide');
            audioOffButton[i].classList.add('hide');
        }
    } else if (audioPlaying = false){
        for(let i=0; i < audioOnButton.length && audioOffButton.length; i++){
            audioOnButton[i].classList.add('hide');
            audioOnButton[i].classList.remove('hide');
        }
    }
}
/**
 * Gets the sound for when a player clicks a button if sound is on otherwise it pauses it
 */
function buttonSoundEffects(){
    if(audioPlaying){
        buttonClick.play();
    } else {
        buttonClick.pause();
    }
}

/**
 * Gets the sound for when a player gets a right answer if sound is on otherwise it pauses it
 */
function rightSoundEffects(){
    if(audioPlaying){
        questionRightSound.play();
    } else {
        questionRightSound.pause();
    }
}

/**
 * Gets the sound for when a player gets a wrong answer if sound is on otherwise it pauses it
 */
function wrongSoundEffects(){
    if(audioPlaying){
        questionWrongSound.play();
    } else {
        questionWrongSound.pause();
    }
}

