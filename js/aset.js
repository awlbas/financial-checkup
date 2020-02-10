
var asets = [
    // {nama: 'emas', tipe:'investasi', nilai: 1000},
    // {nama: 'tabungan bca', tipe: 'likuid', nilai: 500},
    // {nama: 'tabungan mandiri', tipe: 'likuid', nilai: 500}
];

// render total aset
function renderTotalAset() {
let totalAset = 0;
asets.forEach( aset => totalAset += aset.nilai );
const totalAsetUi = `
    <div class="card-panel white row center">
        <div class="recipe-details">
            <div class="recipe-title">TOTAL ASET</div>
            <div class="recipe-title">${totalAset}</div>
        </div>
    `;
document.querySelector('.totalaset').innerHTML = totalAsetUi;
}