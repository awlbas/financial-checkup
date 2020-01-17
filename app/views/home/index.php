<!-- Nilai Bersih Kekayaan -->
<div>

    <h5>NILAI BERSIH KEKAYAAN</h5>
    <ul>
        <li>
            Jumlah Kekayaan Bersih Anda Saat Ini: <?= $data['kayaBersih'] ?>
        </li>
        <li>
            <?= $data['persenKaya'] ?>,00%
        </li>
        <li>
            <?php 

                if ( $data['persenKaya'] < 0 ) {
                    echo 'Bangkrut';
                } elseif ( $data['persenKaya'] <= 50 ) {
                    echo 'Belum Aman';
                } else {
                    echo 'Aman';
                }
            
            ?>
        </li>
    </ul>

</div>

<!-- Dana Darurat -->
<div>

    <h5>DANA DARURAT</h5>
    <ul>
        <li>
            Pengeluaran Bulanan Perusahaan: <?= $data['sumdankel'] ?>
        </li>
        <li>
            Dana Darurat Saat Ini: <?= $data['sumAsetLik'] ?>
        </li>
        <li>
            Dana Darurat Ideal 3 Bulan - 6 Bulan: <?= $data['sumAsetLik'] / $data['sumdankel'] ?>
        </li>
    </ul>

</div>

<!-- Rasio Menabung/Investasi -->
<div>

    <h5>RASIO MENABUNG/INVESTASI</h5>
    <ul>
        <li>
            Saat Ini Investasi/Menabung Sebesar: <?= $data['sumKelInv'] ?>
        </li>
        <li>
            <?= $data['rasioTabung'] ?>% dari penghasilan perusahaan.
        </li>
    </ul>

</div>

<!-- Rasio Kewajiban Terhadap Aset -->
<div>

    <h5>RASIO KEWAJIBAN TERHADAP ASET</h5>
    <ul>
        <li>
            Jumlah Utang (Kewajiban Perusahaan): <?= $data['totalKewajiban'] ?>
        </li>
        <li>
            Dibandingkan aset saat ini: <?= $data['rasioWajib'] ?>%
        </li>
    </ul>

</div>

<!-- Rasio Kewajiban Terhadap Penghasilan -->
<div>

    <h5>RASIO KEWAJIBAN TERHADAP PENGHASILAN</h5>
    <ul>
        <li>
            Maksimum Total Cicilan Utang (kewajiban) Adalah: 
            <?= $data['sumJangKel'] / $data['sumdansuk'] * 100; ?>%

        </li>
    </ul>

</div>