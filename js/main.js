
let asets = [
    {nama: 'emas', tipe:'investasi', nilai: 1000},
    {nama: 'tabungan bca', tipe: 'likuid', nilai: 500},
    {nama: 'tabungan mandiri', tipe: 'likuid', nilai: 500}
];

// Total Aset
let totalFor = 0;
for (let i = 0; i < asets.length; i++){
    totalFor += asets[i].nilai;
} console.log(totalFor);

let totalEach = 0;
asets.forEach( aset => totalEach += aset.nilai ); 
console.log(totalEach);

// show aset
asets.forEach( aset => console.log(aset) ); 

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

