const recipes = document.querySelector('.recipes');
const form = document.querySelector('.side-form');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});


// render new aset
const renderAset = (data, id) => {
  const html = `
  <div class="card-panel recipe white row" data-id="${id}">
    <img src="img/dish.png" alt="recipe thumb">
    <div class="recipe-details">
      <div class="recipe-title">${data.nama}</div>
      <div class="recipe-ingredients">${data.tipe}</div>
      <div class="recipe-title">${data.nilai}</div>
    </div>
    <div class="recipe-delete">
      <i class="material-icons" data-id="${id}">delete_outline</i>
    </div>
  </div>
`;
  document.querySelector('.recipes').innerHTML += html
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const items =
  { nama: document.getElementById('nama').value,
    tipe: document.getElementById('tipe').value,
    nilai: parseInt(document.getElementById('nilai').value,),
  };
  asets.push(items);
  renderAset(asets[asets.length-1], asets.length-1);
  renderTotalAset();
});


// remove aset
const asetContainer = document.querySelector('.recipes');
asetContainer.addEventListener('click', evt =>{
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    asets.splice(id, 1);
    const aset = document.querySelector(`.recipe[data-id="${id}"]`);
    aset.remove();
    renderTotalAset();
  }

});