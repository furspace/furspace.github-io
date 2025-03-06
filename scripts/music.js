const playIconContainer = document.getElementById('musicButton');
const audioPlayerContainer = document.getElementById('musicContainer');
let playState = 'play';

playIconContainer.addEventListener('click', () => {
    if(playState === 'play') {
        audio.play();
        playState = 'pause';
    } else {
        audio.pause();
        playState = 'play';
    }
});



/** Implementation of the functionality of the audio player */

const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
const outputContainer = document.getElementById('volume-output');
let raf = null;

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}