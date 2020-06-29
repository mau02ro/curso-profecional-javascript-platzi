class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    //initPlugins
    this.initPlayer();
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

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }
}

export default MediaPlayer;
