
const danaKeluar = [
    {nama: 'gaji karyawan', tipe:'tetap perusahaan', nilai: 500},
    {nama: 'listrik', tipe: 'tetap operasional', nilai: 100},
    {nama: 'modal kerja', tipe: 'kewajiban jangka pendek', nilai: 100},
    {nama: 'cicilan kantor', tipe: 'kewajiban jangka panjang', nilai: 200},
    {nama: 'tabungan bank', tipe: 'investasi', nilai: 300},
    {nama: 'emas', tipe: 'investasi', nilai: 200},
    {nama: 'premi asuransi', tipe: 'proteksi', nilai: 50},
];

// render dana keluar
danaKeluar.forEach( (dankel, index) => {
    const html = `
    <div class="card-panel recipe white row" data-id="${index}">
      <img src="img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${dankel.nama}</div>
        <div class="recipe-ingredients">${dankel.tipe}</div>
        <div class="recipe-title">${dankel.nilai}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" data-id="index">delete_outline</i>
      </div>
    </div>
  `;
    document.querySelector('.danaKeluar').innerHTML += html
  });

// render total dana masuk
let totalDankel = 0;
danaKeluar.forEach( dankel => totalDankel += dankel.nilai );
const totalDankelUi = `
    <div class="card-panel white row center">
        <div class="recipe-details">
            <div class="recipe-title">TOTAL DANA MASUK</div>
            <div class="recipe-title">${totalDankel}</div>
        </div>
    `;
document.querySelector('.danaKeluar').innerHTML += totalDankelUi;