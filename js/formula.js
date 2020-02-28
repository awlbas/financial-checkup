function KayaBersih(){
  let total = 0;
  db.transaction('aset').objectStore('aset').openCursor().onsuccess = event => {
      let cursor = event.target.result;
      
      if(cursor) {
          
          db.transaction('kewajiban').objectStore('kewajiban').openCursor().onsuccess = event2 => {
              let cursor2 = event2.target.result;
              if(cursor2) {
                  total -= cursor2.value.nilai;
                  cursor2.continue();
                  console.log(total);
              }
          }
          
          total += cursor.value.nilai;
          console.log(total);
          cursor.continue();
      }
  }
}


function addAset() {
    let items =
      { nama: document.getElementById('nama').value,
        tipe: document.getElementById('tipe').value,
        nilai: parseInt(document.getElementById('nilai').value),
      };
    asets.push(items);
    console.log(asets);
    return false;
  }

// generate random id
console.log(Math.floor(1000 + Math.random() * 9000));

// find index
console.log(asets.findIndex(aset => aset.id == "6559"));

// show aset
asets.forEach( aset => console.log(aset) ); 

// Total Aset
let totalFor = 0;
for (let i = 0; i < asets.length; i++){
    totalFor += asets[i].nilai;
} console.log(totalFor);

let totalEach = 0;
asets.forEach( aset => totalEach += aset.nilai ); 
console.log(totalEach);


// filter aset
console.log( asets.filter(aset => {return aset.tipe == 'likuid';}) );

// total filter likuid
let totalLikuid = 0;
asets.filter(aset => {return aset.tipe == 'likuid';}).forEach( aset => totalLikuid += aset.nilai ); 
console.log(totalLikuid);

// let totalEach = 0;
// asets.forEach(function(aset){
//     totalEach += aset.nilai
// }); console.log(totalEach);

// jumlah kekayaan bersih = total aset - total kewajiban
let kekayaanBersih = totalAset - totalWajib;
console.log(kekayaanBersih);
//persentase = kekayaan bersih / total aset
let ratioKekayaan = kekayaanBersih / totalAset * 100;
console.log(ratioKekayaan);
// hasil checkup kekayaan
if(ratioKekayaan > 50) {
    console.log('aman');
} else {console.log('tidak aman');}

// dana darurat

// pengeluaran bulanan perusahaan = total dana keluar
console.log(totalDankel);
// dana darurat = total aset likuid
let totalLikuid = 0;
asets.filter(aset => {return aset.tipe == 'likuid';}).forEach( aset => totalLikuid += aset.nilai ); 
console.log(totalLikuid);
// dana darurat ideal 3 - 6 bulan = total likuid / total dana keluar
console.log( totalLikuid / totalDankel );

// rasio menabung

// saat ini menabung sebesar = total pengeluaran investasi
let totalInvest = 0;
danaKeluar.filter(dankel => {return dankel.tipe == 'investasi';}).forEach( dankel => totalInvest += dankel.nilai ); 
console.log(totalInvest);
// ratio investasi dari penghasilan perusahaan = total investasi / total dan masuk
console.log(totalInvest / totalDansuk * 100);

// rasio kewajiban terhadap aset

// jumlah hutang perusahaan = total kewajiban
console.log(totalWajib);
// dibandingkan dengan aset saat ini = total kewajiban / total aset
console.log(totalWajib / totalAset * 100);

// rasio kewajiban terhadap penghasilan = total pengeluaran kewajiban / total dana masuk
let totalKelWajib = 0;
danaKeluar.filter(dankel => {return dankel.tipe == 'kewajiban jangka panjang' || dankel.tipe == 'kewajiban jangka pendek';}).forEach( dankel => totalKelWajib += dankel.nilai ); 
console.log(totalKelWajib / totalDansuk * 100);