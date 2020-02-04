
const danaMasuk = [
    {nama: 'profit bersih penjualan', tipe:'tetap', nilai: 2000},
    {nama: 'komisi', tipe: 'tidak tetap', nilai: 200}
];

// render dana masuk
danaMasuk.forEach( (dansuk, index) => {
    const html = `
    <div class="card-panel recipe white row" data-id="${index}">
      <img src="img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${dansuk.nama}</div>
        <div class="recipe-ingredients">${dansuk.tipe}</div>
        <div class="recipe-title">${dansuk.nilai}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" data-id="index">delete_outline</i>
      </div>
    </div>
  `;
    document.querySelector('.danaMasuk').innerHTML += html
  });

// render total dana masuk
let totalDansuk = 0;
danaMasuk.forEach( dansuk => totalDansuk += dansuk.nilai );
const totalDansukUi = `
    <div class="card-panel white row center">
        <div class="recipe-details">
            <div class="recipe-title">TOTAL DANA MASUK</div>
            <div class="recipe-title">${totalDansuk}</div>
        </div>
    `;
document.querySelector('.danaMasuk').innerHTML += totalDansukUi;