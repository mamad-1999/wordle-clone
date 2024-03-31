// sw.js
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/favicon.ico',
                '/service-worker.js',
                '/src/css/styles.css',
                '/src/js/script.js',
                '/src/js/targetWords.js',
                '/src/js/dictionary.js',
                '/src/images/icon-192x192.png',
                '/src/images/icon-256x256.png',
                '/src/images/icon-384x384.png',
                '/src/images/icon-512x512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});