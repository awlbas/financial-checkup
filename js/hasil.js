// jumlah kekayaan bersih = total aset - total kewajiban
const kekayaanBersih = totalAset - totalWajib;
//persentase = kekayaan bersih / total aset
const ratioKekayaan = Math.round(kekayaanBersih / totalAset * 100);
// hasil checkup kekayaan
const hasil = (ratioKekayaan > 50) ? "aman":"tidak aman";
// ui
const kekayaanBersihUi = `
    <div class="card-panel white row center">
        <div class="recipe-details">
            <div class="recipe-title">NILAI BERSIH KEKAYAAN ANDA</div>
            <div class="recipe-ingredients">${kekayaanBersih}</div>
            <div class="recipe-ingredients">Rasio: ${ratioKekayaan}%</div>
            <div class="recipe-title">${hasil}</div>
        </div>
    `;
document.querySelector('.kekayaanBersih').innerHTML += kekayaanBersihUi;

// dana darurat
    // pengeluaran bulanan perusahaan = total dana keluar

    // dana darurat = total aset likuid
    let totalLikuid = 0;
    asets.filter(aset => {return aset.tipe == 'likuid';}).forEach( aset => totalLikuid += aset.nilai ); 

    // dana darurat ideal 3 - 6 bulan = total likuid / total dana keluar
    
    // ui
    const danaDaruratUi = `
        <div class="card-panel white row center">
            <div class="recipe-details">
                <div class="recipe-title">DANA DARURAT PERUSAHAAN</div>
                <div class="recipe-ingredients">pengeluaran bulanan perusahaan: ${totalDankel}</div>
                <div class="recipe-ingredients">dana darurat saat ini: ${totalLikuid}</div>
                <div class="recipe-title">dana darurat untuk: ${Math.round(totalLikuid / totalDankel)} bulan</div>
            </div>
        `;
    document.querySelector('.danaDarurat').innerHTML += danaDaruratUi;


// rasio menabung

    // saat ini menabung sebesar = total pengeluaran investasi
    let totalInvest = 0;
    danaKeluar.filter(dankel => {return dankel.tipe == 'investasi';}).forEach( dankel => totalInvest += dankel.nilai ); 

    // ratio investasi dari penghasilan perusahaan = total investasi / total dansuk

    // ui
    const rasioInvestui = `
        <div class="card-panel white row center">
            <div class="recipe-details">
                <div class="recipe-title">RASIO MENABUNG ATAU INVESTASI</div>
                <div class="recipe-ingredients">saat ini ivestasi/menabung: ${totalInvest}</div>
                <div class="recipe-title">${Math.round(totalInvest / totalDansuk * 100)}% dari penghasilan perusahaan</div>
            </div>
        `;
    document.querySelector('.rasioInvest').innerHTML += rasioInvestui;


// rasio kewajiban terhadap aset

    // jumlah hutang perusahaan = total kewajiban

    // dibandingkan dengan aset saat ini = total kewajiban / total aset

    // ui
    const rasioWajibAsetUi = `
        <div class="card-panel white row center">
            <div class="recipe-details">
                <div class="recipe-title">RASIO KEWAJIBAN TERHADAP ASET</div>
                <div class="recipe-ingredients">jumlah kewajiban perusahaan: ${totalWajib}</div>
                <div class="recipe-title">dibandingkan aset saat ini: ${Math.round(totalWajib / totalAset * 100)}%</div>
            </div>
        `;
    document.querySelector('.rasioWajibAset').innerHTML += rasioWajibAsetUi;


// rasio kewajiban terhadap penghasilan = total pengeluaran kewajiban / total dana masuk
let totalKelWajib = 0;
danaKeluar.filter(dankel => {return dankel.tipe == 'kewajiban jangka panjang' || dankel.tipe == 'kewajiban jangka pendek';}).forEach( dankel => totalKelWajib += dankel.nilai );

    // ui
    const rasioWajibHasilUi = `
        <div class="card-panel white row center">
            <div class="recipe-details">
                <div class="recipe-title">RASIO KEWAJIBAN TERHADAP PENGHASILAN</div>
                <div class="recipe-title">dibandingkan aset saat ini: ${Math.round(totalKelWajib / totalDansuk * 100)}%</div>
            </div>
        `;
    document.querySelector('.rasioWajibHasil').innerHTML += rasioWajibHasilUi;

