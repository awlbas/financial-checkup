// check support
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

// init
const DB_NAME = 'fc-db';
const DB_VERSION = 1;
const DB_STORE_NAME = 'asets';

// store result db connection
let db;

// create db connection
let req = indexedDB.open(DB_NAME, DB_VERSION);

// open db success
req.onsuccess = evt => {
    // Equal to: db = req.result;
    let db = req.result;
    let tx = db.transaction(DB_STORE_NAME).objectStore(DB_STORE_NAME).getAll();
    console.log("openDb DONE");
    render(tx);
};

// open db failed
req.onerror = function (evt) {
    console.error("openDb:", evt.target.errorCode);
};

// if objStore doesn't exist
req.onupgradeneeded = evt => {
    console.log("openDb.onupgradeneeded");
    // create objectStore/table
    var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
    
    // create objectStore/table index and type
    store.createIndex('by_nama', 'nama', { unique: true });
    store.createIndex('by_tipe', 'tipe');
    store.createIndex('by_nilai', 'nilai');

    // Populate with initial data
    store.put({nama: "Tabungan Mandiri", tipe: "Likuid", nilai:100});
    store.put({nama: "Emas", tipe: "Investasi", nilai:200});
    store.put({nama: "Alat Produksi", tipe: "Perusahaan", nilai:500});
};

// get data by value
// db.transaction(DB_STORE_NAME).objectStore(DB_STORE_NAME).get(1).onsuccess = evt => {
//     console.log(event.target.result.nilai);
//   };