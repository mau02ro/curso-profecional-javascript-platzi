//self es el this de los service worker

self.addEventListener("install", (event) => {
  //crear pre-cache
  event.waitUntil(precache()); //espera a que se resuelva la prmesa
});

async function precache() {
  //caches.open("nombre"); regresa una promesa
  const cache = await caches.open("v1");

  return cache.addAll([
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/BigBuckBunny.js",
    "/assets/styles.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
  ]);
}
