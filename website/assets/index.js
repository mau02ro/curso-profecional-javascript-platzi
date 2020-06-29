"use strict";
exports.__esModule = true;
var MediaPlayer_js_1 = require("@mau02ro/mediaplayer/lib/MediaPlayer.js");
var AutoPlay_js_1 = require("@mau02ro/mediaplayer/lib/plugins/AutoPlay.js");
var AutoPause_js_1 = require("@mau02ro/mediaplayer/lib/plugins/AutoPause.js");
var index_js_1 = require("@mau02ro/mediaplayer/lib/plugins/Ads/index.js");
var video = document.querySelector("video");
var playPause = document.querySelector("#play-pause");
var onOffSond = document.querySelector("#on-of-sond");
var player = new MediaPlayer_js_1["default"]({
  el: video,
  plugins: [
    new AutoPlay_js_1["default"](),
    new AutoPause_js_1["default"](),
    new index_js_1["default"](),
  ],
});
playPause.onclick = function () {
  return player.media.paused ? player.play() : player.stop();
};
onOffSond.onclick = function () {
  return player.media.muted ? player.unmute() : player.mute();
};
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      // console.log("Service worker registration succeeded:", registration);
    })
    ["catch"](function (error) {
      console.log("Service worker registration failed:", error);
    });
} else {
  console.log("Service workers are not supported.");
}
