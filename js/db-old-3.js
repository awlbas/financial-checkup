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

class ValueDB {
    constructor (objectStore) {
        this.value = new Promise (resolve => {
            let result = [];
            db.transaction(objectStore).objectStore(objectStore).openCursor().onsuccess = event => {
                let cursor = event.target.result;
                if(!cursor){
                    resolve (result);
                    return
                }
                result.push(cursor.value);
                cursor.continue();
            }
        })
    }  
}

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
        'remdanamasuk':(itemId)=>{removeData(2,0,itemId)},'remdanakeluar':(itemId)=>{removeData(3,0,itemId)},
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
            
            // Populate with initial data
            objectStore[1].forEach( i => {
                store.put({nama: i.nama, tipe: i.tipe, nilai:i.nilai});
            });
        })
    };
    
    // function hasil checkup 
    function hasilCheckUp(){

        let aset = new ValueDB('aset');
        let kewajiban = new ValueDB('kewajiban');
        let danaMasuk = new ValueDB('danamasuk');
        let danaKeluar = new ValueDB('danakeluar');

        Promise.all([aset.value,kewajiban.value,danaMasuk.value,danaKeluar.value])
        .then( response => {
            const[aset,kewajiban,danaMasuk,danaKeluar] = response;

            // kekayaan bersih
            kayaBersih(aset,kewajiban);
            // dana darurat
            danaDarurat(danaKeluar, aset);
            // rasio menabung/investasi
            rasioTabung(danaKeluar,danaMasuk);
            //rasio kewajiban terhadap aset
            rasioKewajibanAset(kewajiban,aset);
            //rasio kewajiban terhadap penghasilan
            rasiokewajibanHasil(danaKeluar,danaMasuk)
        })
    }

    function rasiokewajibanHasil(danaKeluar,danaMasuk){
        const [totalDanaMasuk] = total(danaMasuk)
        const totalKeluarPanjang = danaKeluar.filter(danaKeluar => {return danaKeluar.tipe == 'Kewajiban Jangka Panjang';}).map(jangkaPanjang=>jangkaPanjang.nilai).reduce((acc,item)=>acc+item);
        const totalKeluarPendek = danaKeluar.filter(danaKeluar => {return danaKeluar.tipe == 'Kewajiban Jangka Pendek';}).map(jangkaPendek=>jangkaPendek.nilai).reduce((acc,item)=>acc+item);
        const rasio = ((totalKeluarPanjang+totalKeluarPendek)/totalDanaMasuk*100).toFixed(2)

        displayHasil([['rasio-wajib-hasil',rasio]]);
    }

    function rasioKewajibanAset(kewajiban,aset){
        const [totalKewajiban,totalAset] = total(kewajiban,aset);
        const rasio = (totalKewajiban/totalAset*100).toFixed(2);
        
        displayHasil([['total-wajib-aset',totalKewajiban],['rasio-wajib-aset',rasio]]);
    }

    function rasioTabung(danaKeluar,danaMasuk){
        const totalInvest = danaKeluar.filter(danaKeluar => {return danaKeluar.tipe == 'Tabungan & Investasi';}).map(tabungan=>tabungan.nilai).reduce((acc,item)=>acc+item);
        const [totalDanaMasuk] = total(danaMasuk);
        const rasioInvest = (totalInvest/totalDanaMasuk*100).toFixed(2);
        
        displayHasil([["total-invest", totalInvest],["rasio-invest",rasioInvest]]);
    }

    function danaDarurat(danaKeluar, aset){
        const [totalDanaKeluar] = total(danaKeluar);
        const totalLikuid = aset.filter(aset => {return aset.tipe == 'Likuid';}).map(likuid=>likuid.nilai).reduce((acc,item)=>acc+item);
        const waktuDarurat = (totalLikuid/totalDanaKeluar).toFixed(2);
        
        displayHasil([["keluar-bulanan", totalDanaKeluar],["dana-darurat", totalLikuid],["waktu-darurat", waktuDarurat]]);
    }

    function total(...values){
        let total = [];
        values.forEach(value => {
            total.push(value.map(item=>item.nilai).reduce((acc,item)=>acc+item));
        })
        return total
    }

    function displayHasil(idNilai){
        idNilai.forEach(value =>{
            document.getElementById(value[0]).innerHTML = value[1];
        })
    }

    function kayaBersih(aset,kewajiban) {
        const [totalAset, totalKewajiban] = total(aset,kewajiban);
        const kayaBersih = totalAset - totalKewajiban;
        const rasioKaya = kayaBersih/totalAset*100;
        const hasilKaya = (rasioKaya > 50) ? "Aman":"Tidak Aman";

        displayHasil([["kaya-bersih", kayaBersih],["rasio-kaya",rasioKaya],["hasil-kaya", hasilKaya]])
    }

    // display data function
    function displayData(a,b){
        let total = 0;
        ITEMS.innerHTML = "";
        
        let store = db.transaction(DB_STORE_NAME[a][b]).objectStore(DB_STORE_NAME[a][b]);

        store.openCursor().onsuccess = event => {
            let cursor = event.target.result;
            // if there is still another cursor to go, keep runing this code
            if(cursor) {
                // put data on html
                putData(cursor, DB_STORE_NAME[a][b]);
                // sum total item
                document.getElementById("total-item").innerHTML = total+=cursor.value.nilai;
                // continue on to the next item in the cursor
                cursor.continue();
            }
        }
    }

    // put data on html
    function putData(cursor, storeName){
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
                <i class="material-icons" id="rem${storeName}" data-id="${cursor.value.id}">delete_outline</i>
            </div>
        </div>
        `;
        // put the item inside the html
        ITEMS.innerHTML += listItem;
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