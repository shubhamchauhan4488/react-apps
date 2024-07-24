/**
 * The service worker (sw.js) is responsible for intercepting network requests, caching resources, 
 * and managing events like install, fetch, and activate.
 */
// sw.js

const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  // Add other assets that you want to cache
];

self.addEventListener('install', (event) => {
  console.log('install event', event)
    
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log('Opened cache');
      await cache.addAll(urlsToCache);
    })()
  );
});

self.addEventListener('fetch', (event) => {
  console.log('fetch', fetch)

  event.respondWith(
    (async () => {
        console.log('event', event)
        console.log('event.request', event?.request)
      const response = await caches.match(event.request);
      return response || fetch(event.request);
    })()
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  console.log('activate', event)

  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      console.log('cacheNames', cacheNames)
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })()
  );
});
