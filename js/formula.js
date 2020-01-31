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