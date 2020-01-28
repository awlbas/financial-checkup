// offline data
db.enablePersistence()
    .catch(err => {
        if(err.code == 'failed-precondition'){
            console.log('persistance failed');
        } else if(err.code == 'unimplemented'){
            console.log('persistence is not available');
        }
    });

// real-time listener
db.collection('aset').onSnapshot((snapshot) => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach( change => {
        // console.log(change, change.doc.data(), change.doc.id);
        if(change.type === 'added'){
            // add the document data to the web page
            renderAset(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed'){
            // remove the document data frowm the web page
            removeAset(change.doc.id);
        }
    })
})

// add new aset
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const taset = {
        nama: form.nama.value,
        tipe: form.tipe.value,
        nilai: form.nilai.value
    };

    db.collection('aset').add(taset)
        .catch(err => console.log(err));

    form.nama.value = '';
    form.tipe.value = '';
    form.nilai.value = '';

});

// delete a aset
const asetContainer = document.querySelector('.aset');
asetContainer.addEventListener('click', evt => {
    // console.log(evt);
    if(evt.target.tagName === 'A'){
        const id = evt.target.getAttribute('data-id');
        db.collection('aset').doc(id).delete();
    }
});