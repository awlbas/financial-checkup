
const kewajiban = [
    {nama: 'kartu kredit', tipe:'jangka pendek', nilai: 100},
    {nama: 'cicilan ruko', tipe: 'jangka panjang', nilai: 150}
];

// render wajib
kewajiban.forEach( (wajib, index) => {
    const html = `
    <div class="card-panel recipe white row" data-id="${index}">
      <img src="img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${wajib.nama}</div>
        <div class="recipe-ingredients">${wajib.tipe}</div>
        <div class="recipe-title">${wajib.nilai}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" data-id="index">delete_outline</i>
      </div>
    </div>
  `;
    document.querySelector('.kewajiban').innerHTML += html
  });

// render total wajib
let totalWajib = 0;
kewajiban.forEach( wajib => totalWajib += wajib.nilai );
const totalWajibUi = `
    <div class="card-panel white row center">
        <div class="recipe-details">
            <div class="recipe-title">TOTAL KEWAJIBAN</div>
            <div class="recipe-title">${totalWajib}</div>
        </div>
    `;
document.querySelector('.kewajiban').innerHTML += totalWajibUi;