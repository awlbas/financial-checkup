// render aset
function render(tx){ 
    tx.onsuccess = evt => { 
        let totalAset = 0;
        evt.target.result.forEach( (data, id) => {
            totalAset += data.nilai;
            const html = `
                <div class="card-panel aset white row" data-id="${id}">
                <img src="img/dish.png" alt="aset thumb">
                <div class="aset-details">
                    <div class="aset-title">${data.nama}</div>
                    <div class="aset-ingredients">${data.tipe}</div>
                    <div class="aset-title">${data.nilai}</div>
                </div>
                <div class="aset-delete">
                    <i class="material-icons" data-id="${id}">delete_outline</i>
                </div>
                </div>
            `;
            document.querySelector('.asets').innerHTML += html;
        })
        const html = `
            <div class="card-panel white row center">
                <div class="aset-details">
                    <div class="aset-title">TOTAL ASET</div>
                    <div class="aset-title">${totalAset}</div>
                </div>
            `;
        document.querySelector('.totalaset').innerHTML = html;
    }
}
