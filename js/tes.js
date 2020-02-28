let db;
let req = indexedDB.open("fc-db", 1);
req.onsuccess = evt => {
    console.log("openDb DONE");
    db = req.result;

    let store = db.transaction('aset').objectStore('aset');
    store.openCursor().onsuccess = event => {
        let cursor = event.target.result;
        if(cursor) {
            console.log(cursor.value.nilai);
            cursor.continue();
        }
    }
};