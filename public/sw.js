const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v3';
const assets = [
    '/financial-checkup/public/',
    '/financial-checkup/public/index.php',
    '/financial-checkup/public/img/dish.png',
    '/financial-checkup/public/css/bootstrap.css',
    '/financial-checkup/public/js/app.js',
    '/financial-checkup/public/js/bootstrap.min.js',
    '/financial-checkup/public/fallback/index.php',
    'https://code.jquery.com/jquery-3.4.1.slim.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};

// install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })    
    );
});

// activate event 
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    
    // console.log('fetch event', evt);
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
        evt.respondWith(
            caches.match(evt.request).then(cacheRes => {
                return cacheRes || fetch(evt.request).then(fetchRes => {
                    return caches.open(dynamicCacheName).then( cache => {
                        cache.put(evt.request.url, fetchRes.clone());
                        limitCacheSize(dynamicCacheName, 20);
                        return fetchRes; 
                    })
                });
            })  .catch(() => caches.match('/financial-checkup/public/fallback/index.php'))
        );
    }
});

// conditional fallback still error
// .catch( () => {
//     if(evt.request.url.indexOf('.php') > -1){
//         return caches.match('/financial-checkup/public/fallback/index.php');
//     }
// }) 