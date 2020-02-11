// check support
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

// init
const DB_NAME = 'fc-db';
const DB_VERSION = 1; // Use a long long for this value (don't use a float)
const DB_STORE_NAME = 'asets';
var db;

// open database
function openDb() {
    console.log("openDb ...");
    
    // create db connection
    var req = indexedDB.open(DB_NAME, DB_VERSION);

    // open db success
    req.onsuccess = function (evt) {
      // Equal to: db = req.result;
      db = this.result;
      console.log("openDb DONE");
      showAsets();
    };

    // open db failed
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    // if objStore doesn't exist
    req.onupgradeneeded = function (evt) {
        console.log("openDb.onupgradeneeded");
        // create objectStore/table
        var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
        
        // create objectStore/table index and type
        store.createIndex('by_nama', 'nama', { unique: true });
        store.createIndex('by_tipe', 'tipe', { unique: false });
        store.createIndex('by_nilai', 'nilai', { unique: false });

        // Populate with initial data
        store.put({nama: "Tabungan Mandiri", tipe: "Likuid", nilai:100});
        store.put({nama: "Emas", tipe: "Investasi", nilai:200});
        store.put({nama: "Alat Produksi", tipe: "Perusahaan", nilai:500});
    };
}

// display asets
function showAsets() {
    var transaction = db.transaction(["fc-db"], "readonly");
    var store = transaction.objectStore("fc-db"); 
    var index = store.index('nama');
    
    
    index.openCursor().onsuccess = e => {
        var cursor = e.target.result;
        console.log(cursor.value.nama);
    }
    
}
