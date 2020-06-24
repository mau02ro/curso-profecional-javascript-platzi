const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.stop = function () {
  this.media.pause();
};

const player = new MediaPlayer({ el: video });

button.onclick = () => (player.media.paused ? player.play() : player.stop());
