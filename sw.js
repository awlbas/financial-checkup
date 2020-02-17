// listen install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
});

// listen activate service worker
self.addEventListener('activate', evt =>{
   // console.log('service worker has been activated');
});

// listen fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
})