// checking service worker
if('serviceWorker' in navigator){
    // promise
    navigator.serviceWorker.register('/sw.js')
     // resolved
     .then( (reg) => console.log('service worker registered') )
     // rejected
     .catch( (err) => console.log('service worker not registerd', err) )
}