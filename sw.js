const CACHE_NAME = 'roadlog-v1'
const STATIC_ASSETS = [
  '/Roadlog/',
  '/Roadlog/index.html',
  '/Roadlog/auth.html',
  '/Roadlog/dashboard.html',
  '/Roadlog/log.html',
  '/Roadlog/history.html',
  '/Roadlog/export.html',
  '/Roadlog/account.html',
  '/Roadlog/affiliate.html',
  '/Roadlog/manifest.json'
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
})
