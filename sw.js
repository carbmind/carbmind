const CACHE_NAME = "carbmind-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/numbers.html",
  "/ratio.html",
  "/meal.html",
  "/files.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
