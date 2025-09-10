const CACHE_NAME = "area96-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/login.html",
  "floatingButtons.js",
  "/gastos.html",
  "/senhas.html",
  "/manifest.json",
  "/sw.js",
  "/favicon.ico"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
