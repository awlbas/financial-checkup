const staticCacheName = 'site-static-v2';
const dynamicCahceName = 'site-dynamic-v2';
const assets = [
    '/',
    'index.html',
    'js/app.js',
    'js/ui.js',
    'js/materialize.min.js',
    'js/db.js',
    'css/materialize.min.css',
    'css/styles.css',
    'img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'pages/fallback.html'
];

// cache size limit function
const limitCacheSize = (name, size) =>{
    caches.open(name).then(cache => {
        cache.keys().then(keys =>{
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
}

// listen install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    // wait until this code finish executed
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    )
});

// listen activate service worker
self.addEventListener('activate', evt =>{
   // console.log('service worker has been activated');
   // delete old cache
   evt.waitUntil(
       caches.keys().then(keys =>{
           return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCahceName)
                .map(key => caches.delete(key))
            )
       })
   )
});

// listen fetch event
self.addEventListener('fetch', evt => {
    // pause fetch event and change to custom event
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request).then(fetchRes =>{
                return caches.open(dynamicCahceName).then(cache =>{
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCahceName, 30);
                    return fetchRes;
                })
            });
        }).catch(() => {
            if(evt.request.url.indexOf('.html') > -1 ){
                return caches.match('pages/fallback.html');
            }
        })
    )
});