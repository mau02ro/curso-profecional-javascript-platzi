import MediaPlayer from "./MediaPlayer";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ el: video });

button.onclick = () => (player.media.paused ? player.play() : player.stop());
