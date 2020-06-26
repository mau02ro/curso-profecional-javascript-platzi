function AutoPause() {
  this.threshold = 0.25;
  this.handleIntersection = this.handleIntersection.bind(this);
}

AutoPause.prototype.run = function (player) {
  this.player = player;
  //IntersectionObserver(funcion a ejecutar cuando exista una intersectiopn, objeto de configuracion)
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold,
  });

  //observe(objeto a observar);
  observer.observe(player.media);
};

AutoPause.prototype.handleIntersection = function (entries) {
  const entry = entries[0];
  const isVisible = entry.intersectionRatio >= this.threshold;

  isVisible ? this.player.play() : this.player.stop();
};

export default AutoPause;
