const CACHE_NAME = 'solar-calc-v1';
const urlsToCache = [
  '/Solar-Calculator/',
  '/Solar-Calculator/index.html',
  '/Solar-Calculator/icon-512.png',
  '/Solar-Calculator/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});