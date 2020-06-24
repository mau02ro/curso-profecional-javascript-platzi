function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.stop = function () {
  this.media.pause();
};

export default MediaPlayer;
