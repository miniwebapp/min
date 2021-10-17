self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/whatsapp/',
      '/whatsapp/index.html',
      '/whatsapp/script.js',
      '/whatsapp/styles/style.css',
      '/whatsapp/images/dp.jpg',
      '/whatsapp/images/background.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
