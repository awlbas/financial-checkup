// check support
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

// init
const DB_NAME = 'fc-db';
const DB_VERSION = 1;
const FORM = document.querySelector('.side-form');
const ITEMS = document.querySelector('.items');
const FUNC = document.querySelector('.function').getAttribute('id');
const NAMA = document.getElementById('nama');
const TIPE = document.getElementById('tipe');
const NILAI = document.getElementById('nilai');
const ASET = ['aset',[{nama:'Tabungan',tipe:'Likuid',nilai: 100},{nama:'Emas',tipe:'Investasi',nilai:150},{nama:'Alat Produksi',tipe:'Perusahaan',nilai:500}]];
const KEWAJIBAN = ['kewajiban',[{nama:'Kartu kredit',tipe:'Jangka Pendek',nilai: 100},{nama:'Cicilan Workshop',tipe:'Jangka Panjang',nilai:200}]];
const DANAMASUK = ['danamasuk',[{nama:'Profit Bersih Penjualan',tipe:'Tetap',nilai: 100},{nama:'Komisi',tipe:'Tidak Tetap',nilai:150}]];
const DANAKELUAR = ['danakeluar',[{nama:'Gaji Karyawan',tipe:'Tetap perusahaan',nilai: 100},{nama:'Biaya Transportasi',tipe:'Tetap Operasional',nilai:150},{nama:'Cicilan Modal Kerja',tipe:'Kewajiban Jangka Pendek',nilai:150},{nama:'Cicilan Kantor',tipe:'Kewajiban Jangka Panjang',nilai:150},{nama:'Tabungan Pensiun',tipe:'Tabungan & Investasi',nilai:150},{nama:'Premi Asuransi',tipe:'Proteksi',nilai:150},{nama:'TV Kabel',tipe:'Konsumtif',nilai:150},{nama:'Pajak Mobil & Motor',tipe:'Variabel',nilai:150},]];
const DB_STORE_NAME = [ASET, KEWAJIBAN, DANAMASUK, DANAKELUAR];

// store result db connection
let db;

window.onload = () => {
    // lookup function
    let lookupFunction = {
        // displayData
        'aset':()=>{displayData(0,0)},'kewajiban':()=>{displayData(1,0)},
        'danamasuk':()=>{displayData(2,0)},'danakeluar':()=>{displayData(3,0)},
        // addData
        'addaset':()=>{addData(0,0)},'addkewajiban':()=>{addData(1,0)},
        'adddanamasuk':()=>{addData(2,0)},'adddanakeluar':()=>{addData(3,0)},
        // removeData
        'remaset':(itemId)=>{removeData(0,0,itemId)},'remkewajiban':(itemId)=>{removeData(1,0,itemId)},
        'remdanamasuk':()=>{displayData(2,0)},'remdanakeluar':()=>{displayData(3,0)},
    }
    
    // create db connection
    let req = indexedDB.open(DB_NAME, DB_VERSION);

    // database handler
    req.onerror = evt => {
        console.error("openDb:", evt.target.errorCode);
    };
    req.onsuccess = evt => {
        console.log("openDb DONE");
        db = req.result;
        // call displayData
        if (FUNC !== "hasil") {lookupFunction[FUNC]();} else {hasilCheckUp();}
    };
    req.onupgradeneeded = evt => {
        let db = evt.target.result;
        
        db.onerror = evt => {
            console.log("Error loading database.");
        }

        DB_STORE_NAME.forEach(objectStore => {
            
            let store = db.createObjectStore(objectStore[0], { keyPath: 'id', autoIncrement: true });
            
            // define objectStore/table index and type
            store.createIndex('by_nama', 'nama', {unique: true});
            store.createIndex('by_tipe', 'tipe');
            store.createIndex('by_nilai', 'nilai');

            objectStore[1].forEach( i => {
                store.put({nama: i.nama, tipe: i.tipe, nilai:i.nilai});
            });
        })


        // Populate with initial data
        // store.put({nama: "Tabungan Mandiri", tipe: "Likuid", nilai:100});
        // store.put({nama: "Tabungan BCA", tipe: "Likuid", nilai:100});
        // store.put({nama: "Tabungan BRI", tipe: "Likuid", nilai:100});
        // store.put({nama: "Tabungan Niaga", tipe: "Likuid", nilai:100});
        // store.put({nama: "Emas", tipe: "Investasi", nilai:200});
        // store.put({nama: "Alat Produksi", tipe: "Perusahaan", nilai:500});
    };

    // function hasil checkup 
    function hasilCheckUp(){
        getData();

        function displayHasil(id,nilai){
            document.getElementById(id).innerHTML = nilai;
        }

        function getData(){
            let totalAset = 0;
            let totalWajib = 0;
            let totalLikuid = 0;
            let totalDankel = 0;
            let totalInvest = 0;
            let totalDansuk = 0;
            let totalPendek = 0;
            let totalPanjang = 0;

            // Kekayaan Bersih
            db.transaction('aset').objectStore('aset').openCursor().onsuccess = event => {
                let cursor = event.target.result;
                if(!cursor == true){
                    db.transaction('kewajiban').objectStore('kewajiban').openCursor().onsuccess = event => {
                        let cursor = event.target.result;
                        if(!cursor){
                            let kayaBersih = totalAset-totalWajib;
                            let rasioKaya = kayaBersih/totalAset*100;
                            let hasilKaya = (rasioKaya > 50) ? "Aman":"Tidak Aman";
                            displayHasil("kaya-bersih",kayaBersih);
                            displayHasil("rasio-kaya",rasioKaya);
                            displayHasil("hasil-kaya",hasilKaya);
                            return
                        }
                        totalWajib += cursor.value.nilai;
                        cursor.continue();
                    }
                    return
                }
                totalAset += cursor.value.nilai;
                cursor.continue();
            }

            // Dana Darurat
            db.transaction('aset').objectStore('aset').
            index("by_tipe").openCursor("Likuid").onsuccess = event => {
                let cursor = event.target.result;
                if(!cursor){
                    db.transaction('danakeluar').objectStore('danakeluar').openCursor().onsuccess = event => {
                        let cursor = event.target.result
                        if(!cursor){
                            displayHasil("keluar-bulanan", totalDankel);
                            displayHasil("dana-darurat", totalLikuid);
                            displayHasil("waktu-darurat", (totalLikuid/totalDankel).toFixed(2));
                            return
                        }
                        totalDankel += cursor.value.nilai;
                        cursor.continue();
                    }
                    return
                }
                totalLikuid += cursor.value.nilai;
                cursor.continue();
            }
            
            // Rasio Menabung & Investasi
            db.transaction('danakeluar').objectStore('danakeluar').
            index("by_tipe").openCursor("Tabungan & Investasi").onsuccess = event => {
                let cursor = event.target.result;
                if(!cursor){
                    db.transaction('danamasuk').objectStore('danamasuk').openCursor().onsuccess = event => {
                        let cursor = event.target.result
                        if(!cursor){
                            displayHasil("total-invest", totalInvest);
                            displayHasil("rasio-invest", (totalInvest/totalDansuk*100).toFixed(2));
                            return
                        }
                        totalDansuk += cursor.value.nilai;
                        cursor.continue();
                    }
                    return
                }
                totalInvest += cursor.value.nilai;
                cursor.continue();
            }

            //Rasio Kewajiban Terhadap Aset
            db.transaction('aset').objectStore('aset').openCursor().onsuccess = event => {
                let cursor = event.target.result;
                if(!cursor == true){
                    db.transaction('kewajiban').objectStore('kewajiban').openCursor().onsuccess = event => {
                        let cursor = event.target.result;
                        if(!cursor){
                            displayHasil("total-wajib-aset",totalWajib);
                            displayHasil("rasio-wajib-aset",(totalWajib/totalAset*100).toFixed(2));
                            return
                        }
                        totalWajib += cursor.value.nilai;
                        cursor.continue();
                    }
                    return
                }
                totalAset += cursor.value.nilai;
                cursor.continue();
            }
            
            // Rasio Kewajiban Terhadap Penghasilan
            db.transaction('danakeluar').objectStore('danakeluar').
            index("by_tipe").openCursor("Kewajiban Jangka Panjang").onsuccess = event => {
                let cursor = event.target.result;
                if(!cursor){
                    db.transaction('danamasuk').objectStore('danamasuk').openCursor().onsuccess = event => {
                        let cursor = event.target.result
                        if(!cursor){
                            db.transaction('danakeluar').objectStore('danakeluar').
                            index("by_tipe").openCursor("Kewajiban Jangka Pendek").onsuccess = event => {
                                let cursor = event.target.result
                                if(!cursor){
                                    displayHasil("rasio-wajib-hasil", ((totalPanjang+totalPendek)/totalDansuk*100).toFixed(2));
                                    return
                                }
                                totalPendek += cursor.value.nilai;
                                cursor.continue();
                            }
                            return
                        }
                        totalDansuk += cursor.value.nilai;
                        cursor.continue();
                    }
                    return
                }
                totalPanjang += cursor.value.nilai;
                cursor.continue();
            }

        }
    }

    // display data function
    function displayData(a,b){
        let total = 0;
        // clear content
        ITEMS.innerHTML = "";
        // get list data
        let store = db.transaction(DB_STORE_NAME[a][b]).objectStore(DB_STORE_NAME[a][b]);
        store.openCursor().onsuccess = event => {
            let cursor = event.target.result;
            // if there is still another cursor to go, keep runing this code
            if(cursor) {
                // create a list item to put each data item inside when displaying it
                const listItem = `
                    <div class="card-panel item white row" data-id=${cursor.value.id}>
                        <img src="/img/dish.png" alt="thumb">
                        <div class="item-details">
                            <div class="item-title">${cursor.value.nama}</div>
                            <div class="item-tipe">${cursor.value.tipe}</div>
                            <div class="item-title">${cursor.value.nilai}</div>
                        </div>
                        <div class="item-delete">
                            <i class="material-icons" id="rem${DB_STORE_NAME[a][b]}" data-id="${cursor.value.id}">delete_outline</i>
                        </div>
                    </div>
                `;
                // put the item inside the html
                ITEMS.innerHTML += listItem;
                // sum total item
                document.getElementById("total-item").innerHTML = total+=cursor.value.nilai;
                // continue on to the next item in the cursor
                cursor.continue();
            }
        }
    }

    // add event listener to form for add data
    if (FUNC !== "hasil") {FORM.addEventListener('submit',submitData,false);}
    function submitData(e) {
        e.preventDefault();
        lookupFunction['add'+FUNC](); 
    }
    function addData(a,b) {
        // grab the values
        let newItem = [
            {nama: NAMA.value, tipe: TIPE.value, nilai: parseInt(NILAI.value) }
        ];

        // open a read/write db transaction, ready for adding the data
        let transaction = db.transaction([DB_STORE_NAME[a][b]], "readwrite");

        // report on the success of the transaction completing, when everything is done
        transaction.oncomplete = function() {
            console.log("Transaction completed: database modification finished.");

            // update the display of data to show the newly added item, by running displayData() again.
            displayData(a,b);
        };

        transaction.onerror = function() {
            console.log('Transaction not opened due to error: ' + transaction.error);
        };

        // call an object store that's already been added to the database
        let objectStore = transaction.objectStore(DB_STORE_NAME[a][b]);
        // Make a request to add our newItem object to the object store
        let objectStoreRequest = objectStore.add(newItem[0]);
        objectStoreRequest.onsuccess = function(event) {
          console.log('Request successful.');
          // clear the form, ready for adding the next entry
          NAMA.value = '';
          //TIPE.value = '';
          NILAI.value = null;
        };
    }

    // add event listener for delete item
    if (FUNC !== "hasil") {ITEMS.addEventListener('click', event => {
        if(event.target.tagName === 'I'){
            // retrieve the name of the item we want to delete
            let itemId = parseInt(event.target.getAttribute('data-id'));
            // call lookup Function removeData
            lookupFunction['rem'+FUNC](itemId);
        }
    })}
    function removeData(a,b,itemId){
        // open a database transaction and delete the item, finding it by keypath we retrieved above
        let transaction = db.transaction(DB_STORE_NAME[a][b], "readwrite");
        transaction.objectStore(DB_STORE_NAME[a][b]).delete(itemId);

        // report that the data item has been deleted
        transaction.oncomplete = () => {
            // delete the parent of the button, which is the list item, so it no longer is displayed
            document.querySelector(`.item[data-id="${itemId}"]`).remove();
            console.log('item with index number \"' + itemId + '\" deleted.');
            document.getElementById("total-item").innerHTML = '0';
            displayData(a,b);
        }
    }
}