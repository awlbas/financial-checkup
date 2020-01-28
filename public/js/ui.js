const aset = document.querySelector('.aset');

// render aset data
const renderAset = (data, id) => {

    const html = `
    <div data-id="${id}">
        
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item">${data.nama}</li>
            <li class="list-group-item">${data.tipe}</li>
            <li class="list-group-item">${data.nilai}</li>
            <li class="list-group-item"><a href="<?=BASEURL?>neraca/hapusaset/<?= $aset['id'] ?>" onclick="return confirm('yakin?');">Hapus</a></li>
            <li class="list-group-item"><a href="<?=BASEURL?>neraca/ubahaset/<?= $aset['id'] ?>">Ubah</a></li>
        </ul>
    
    </div>
    `;

    aset.innerHTML += html;
};

// const renderAset = (data, id) => {

//     const html = `
//     <div data-id="${id}">
//         ${data.nama} ${data.tipe} ${data.nilai} 
//     </div>
//     `;

//     aset.innerHTML += html;
// };

