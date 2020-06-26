import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const playPause = document.querySelector("#play-pause");
const onOffSond = document.querySelector("#on-of-sond");

const player = new MediaPlayer({
  el: video,
  plugins: [
    /*new AutoPlay(), new AutoPause()*/
  ],
});

playPause.onclick = () => (player.media.paused ? player.play() : player.stop());
onOffSond.onclick = () =>
  player.media.muted ? player.unmute() : player.mute();

//Detectar si el navegador del usuario de soporte a los service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
