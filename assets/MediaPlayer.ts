class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    //initPlugins
    this.initPlugins();
  }
  play() {
    this.media.play();
  }
  stop() {
    this.media.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  private initPlugins() {
    /*const player = {
      play: () => this.play(),
      stop: () => this.stop(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(val) {
        this.media.muted = val;
      },
    };*/

    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
}

export default MediaPlayer;
