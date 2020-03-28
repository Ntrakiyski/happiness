const cacheName = 'V1';

const cacheAssets = [
'index.html',
'past.html',
'present.html',
'future.html',
'style.css',
'main.js'
]; 


self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);

  e.waitUntil(
  	caches
  	.open(cacheName)
  	.then(cache => {
  		console.log('Service worker: Caching files');
  		cache.addAll(cacheAssets);
  	})
  	.then(() => self.skipWaiting() )
  	);

});

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activating Service Worker.....',event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetch initiated.....',event);
  event.respondWith(fetch(event.request));
});
