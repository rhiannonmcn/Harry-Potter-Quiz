const questionRightSound = new Audio("assets/sounds/right-sound.mp3");
const questionWrongSound = new Audio("assets/sounds/wrong-sound.mp3");
const buttonClick = new Audio("assets/sounds/button-click.mp3");
const backgroundMusic = new Audio("assets/sounds/background-music");
const audioOnButton = document.getElementsByClassName("audio-on");
const audioOffButton = document.getElementsByClassName("audio-off");
let audioPlaying = true;

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

function buttonSoundEffects(){
    if(audioPlaying){
        buttonClick.play();
    } else {
        buttonClick.pause();
    }
}

function rightSoundEffects(){
    if(audioPlaying){
        questionRightSound.play();
    } else {
        questionRightSound.pause();
    }
}

function wrongSoundEffects(){
    if(audioPlaying){
        questionWrongSound.play();
    } else {
        questionWrongSound.pause();
    }
}

