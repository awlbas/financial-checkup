// check support
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

// init
const DB_NAME = 'fc-db';
const DB_VERSION = 1;
const DB_STORE_NAME = 'asets';
const FORM = document.querySelector('.side-form');
const ITEMS = document.querySelector('.items');
const ASET = document.querySelector('.aset');
const NAMA = document.getElementById('nama');
const TIPE = document.getElementById('tipe');
const NILAI = document.getElementById('nilai');

// store result db connection
let db;

window.onload = () => {

    // create db connection
    let req = indexedDB.open(DB_NAME, DB_VERSION);

    // database handler
    req.onerror = evt => {
        console.error("openDb:", evt.target.errorCode);
    };
    req.onsuccess = evt => {
        console.log("openDb DONE");
        db = req.result;
        displayData();
    };
    req.onupgradeneeded = evt => {
        let db = evt.target.result;
        
        db.onerror = evt => {
            console.log("Error loading database.");
        }

        let store = db.createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
        
        // define objectStore/table index and type
        store.createIndex('by_nama', 'nama', {unique: true});
        store.createIndex('by_tipe', 'tipe');
        store.createIndex('by_nilai', 'nilai');

        // Populate with initial data
        store.put({nama: "Tabungan Mandiri", tipe: "Likuid", nilai:100});
        store.put({nama: "Tabungan BCA", tipe: "Likuid", nilai:100});
        store.put({nama: "Tabungan BRI", tipe: "Likuid", nilai:100});
        store.put({nama: "Tabungan Niaga", tipe: "Likuid", nilai:100});
        store.put({nama: "Emas", tipe: "Investasi", nilai:200});
        store.put({nama: "Alat Produksi", tipe: "Perusahaan", nilai:500});
    };

    function displayData(){
        let total = 0;
        // clear content
        ITEMS.innerHTML = "";
        // get list data
        let store = db.transaction(DB_STORE_NAME).objectStore(DB_STORE_NAME);
        store.openCursor().onsuccess = event => {
            let cursor = event.target.result;
            // if there is still another cursor to go, keep runing this code
            if(cursor) {
                // create a list item to put each data item inside when displaying it
                const listItem = `
                    <div class="card-panel aset white row" data-id=${cursor.value.id}>
                        <img src="img/dish.png" alt="aset thumb">
                        <div class="aset-details">
                            <div class="aset-title">${cursor.value.nama}</div>
                            <div class="aset-tipe">${cursor.value.tipe}</div>
                            <div class="aset-title">${cursor.value.nilai}</div>
                        </div>
                        <div class="aset-delete">
                            <i class="material-icons" data-id="${cursor.value.id}">delete_outline</i>
                        </div>
                    </div>
                `;
                // put the item inside the aset
                ITEMS.innerHTML += listItem;
                // sum total aset
                document.getElementById("total-aset").innerHTML = total+=cursor.value.nilai;
                // continue on to the next item in the cursor
                cursor.continue();
            }
        }
    }

    // add event listener to form
    FORM.addEventListener('submit',addData,false);

    function addData(e) {
        // prevent default
        e.preventDefault();

        // grab the values
        let newItem = [
            {nama: NAMA.value, tipe: TIPE.value, nilai: parseInt(NILAI.value) }
        ];

        // open a read/write db transaction, ready for adding the data
        let transaction = db.transaction([DB_STORE_NAME], "readwrite");

        // report on the success of the transaction completing, when everything is done
        transaction.oncomplete = function() {
            console.log("Transaction completed: database modification finished.");

            // update the display of data to show the newly added item, by running displayData() again.
            displayData();
        };

        transaction.onerror = function() {
            console.log('Transaction not opened due to error: ' + transaction.error);
        };

        // call an object store that's already been added to the database
        let objectStore = transaction.objectStore(DB_STORE_NAME);
        // console.log(objectStore.indexNames);
        // console.log(objectStore.keyPath);
        // console.log(objectStore.name);
        // console.log(objectStore.transaction);
        // console.log(objectStore.autoIncrement);

        // Make a request to add our newItem object to the object store
        let objectStoreRequest = objectStore.add(newItem[0]);
        objectStoreRequest.onsuccess = function(event) {

          // report the success of our request
          // (to detect whether it has been succesfully
          // added to the database, you'd look at transaction.oncomplete)
          console.log('Request successful.');

          // clear the form, ready for adding the next entry
          NAMA.value = '';
          TIPE.value = '';
          NILAI.value = null;
        };
    }

    // add event listener for delete aset
    ITEMS.addEventListener('click', event => {
        if(event.target.tagName === 'I'){
            // retrieve the name of the task we want to delete
            let asetId = parseInt(event.target.getAttribute('data-id'));

            // open a database transaction and delete the aset, finding it by keypath we retrieved above
            let transaction = db.transaction([DB_STORE_NAME], "readwrite");
            let request = transaction.objectStore(DB_STORE_NAME).delete(asetId);

            // report that the data item has been deleted
            transaction.oncomplete = () => {
                // delete the parent of the button, which is the list item, so it no longer is displayed
                document.querySelector(`.aset[data-id="${asetId}"]`).remove();
                console.log('aset with index number \"' + asetId + '\" deleted.');
                document.getElementById("total-aset").innerHTML = '0';
                displayData();
            }
        }
    })
}