
let asets = [
    {id: '6489', nama: 'emas', tipe:'investasi', nilai: 1000},
    {id: '6559', nama: 'tabungan bca', tipe: 'likuid', nilai: 500},
    {id: '1489', nama: 'tabungan mandiri', tipe: 'likuid', nilai: 500}
];

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
