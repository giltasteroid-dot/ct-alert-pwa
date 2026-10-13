// Service Worker minimale: serve solo a rendere l'app installabile.
// Non salva nulla in cache: la dashboard è sempre quella aggiornata.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.method === 'GET' && e.request.url.indexOf(self.location.origin) === 0) {
    e.respondWith(fetch(e.request));
  }
});