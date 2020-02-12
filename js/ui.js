document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add aset form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});

// const form = document.querySelector('.side-form');
// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   const items =
//   { nama: document.getElementById('nama').value,
//     tipe: document.getElementById('tipe').value,
//     nilai: parseInt(document.getElementById('nilai').value,),
//   };
//   console.log(items);
  
//   // asets.push(items);
//   // renderAset(asets[asets.length-1], asets.length-1);
//   // renderTotalAset();
// });

// render new aset
// const renderAset = (data, id) => {
//   const html = `
//   <div class="card-panel aset white row" data-id="${id}">
//     <img src="img/dish.png" alt="aset thumb">
//     <div class="aset-details">
//       <div class="aset-title">${data.nama}</div>
//       <div class="aset-ingredients">${data.tipe}</div>
//       <div class="aset-title">${data.nilai}</div>
//     </div>
//     <div class="aset-delete">
//       <i class="material-icons" data-id="${id}">delete_outline</i>
//     </div>
//   </div>
// `;
//   document.querySelector('.asets').innerHTML += html
// }


// remove aset
// const asetContainer = document.querySelector('.asets');
// asetContainer.addEventListener('click', evt =>{
//   if(evt.target.tagName === 'I'){
//     const id = evt.target.getAttribute('data-id');
//     asets.splice(id, 1);
//     const aset = document.querySelector(`.aset[data-id="${id}"]`);
//     aset.remove();
//     renderTotalAset();
//   }

// });