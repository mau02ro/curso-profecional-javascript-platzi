import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads/index";

const video = document.querySelector("video");
const playPause: HTMLMediaElement = document.querySelector("#play-pause");
const onOffSond: HTMLMediaElement = document.querySelector("#on-of-sond");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

playPause.onclick = () => (player.media.paused ? player.play() : player.stop());
onOffSond.onclick = () =>
  player.media.muted ? player.unmute() : player.mute();

if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      // console.log("Service worker registration succeeded:", registration);
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
} else {
  console.log("Service workers are not supported.");
}
