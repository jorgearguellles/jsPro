import {MediaPlayer} from "./MediaPlayer.js";
import {AutoPlay} from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const player = new MediaPlayer(
  { 
    el: video, 
    plugins: [
      // new AutoPlay()
    ] 
  }
);

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  player.media.muted
    ? player.unMute()
    : player.mute()
};