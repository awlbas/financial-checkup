
const asets = [
    {nama: 'emas', tipe:'investasi', nilai: 1000},
    {nama: 'tabungan bca', tipe: 'likuid', nilai: 500},
    {nama: 'tabungan mandiri', tipe: 'likuid', nilai: 500}
];

// render aset
asets.forEach( (aset, index) => {
    const html = `
    <div class="card-panel recipe white row" data-id="${index}">
      <img src="img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${aset.nama}</div>
        <div class="recipe-ingredients">${aset.tipe}</div>
        <div class="recipe-title">${aset.nilai}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" data-id="index">delete_outline</i>
      </div>
    </div>
  `;
    document.querySelector('.recipes').innerHTML += html
  });

// render total aset
let totalAset = 0;
asets.forEach( aset => totalAset += aset.nilai );
const totalAsetUi = `
    <div class="card-panel white row center">
        <div class="recipe-details">
            <div class="recipe-title">TOTAL ASET</div>
            <div class="recipe-title">${totalAset}</div>
        </div>
    `;
document.querySelector('.recipes').innerHTML += totalAsetUi;