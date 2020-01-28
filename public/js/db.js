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
        }
    })
})