<div class="container">

<br>
    <h5>ASET</h5><br>
    <a class="btn btn-primary" href="<?=BASEURL?>neraca/tambahaset" role="button">Tambah Aset</a><br>
    <div class="aset"></div>
<!-- 
    <?php foreach( $data['aset'] as $aset ) : ?>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><?= $aset['nama']; ?></li>
            <li class="list-group-item"><?= $aset['tipe']; ?></li>
            <li class="list-group-item"><?= $aset['nilai']; ?></li>
            <li class="list-group-item"><a href="<?=BASEURL?>neraca/hapusaset/<?= $aset['id'] ?>" onclick="return confirm('yakin?');">Hapus</a></li>
            <li class="list-group-item"><a href="<?=BASEURL?>neraca/ubahaset/<?= $aset['id'] ?>">Ubah</a></li>
        </ul>
    <?php endforeach; ?> -->

<br>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">TOTAL ASET</li>
        <li class="list-group-item"><?= array_sum($data['totalAset']) ?></li>
    </ul>

</div>

<br>

<div class="container">

<br>
    <h5>KEWAJIBAN</h5><br>
    <a class="btn btn-primary" href="<?=BASEURL?>neraca/tambahkewajiban" role="button">Tambah Kewajiban</a><br>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">Nama</li>
        <li class="list-group-item">Tipe</li>
        <li class="list-group-item">Nilai Rp</li>
    </ul>

    <?php foreach( $data['kewajiban'] as $wajib ) : ?>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><?= $wajib['nama']; ?></li>
            <li class="list-group-item"><?= $wajib['tipe']; ?></li>
            <li class="list-group-item"><?= $wajib['nilai']; ?></li>
            <li class="list-group-item"><a href="<?=BASEURL?>neraca/hapuskewajiban/<?= $wajib['id'] ?>" onclick="return confirm('yakin?');">Hapus</a></li>
            <li class="list-group-item"><a href="<?=BASEURL?>neraca/ubahwajib/<?= $wajib['id'] ?>">Ubah</a></li>
        </ul>
    <?php endforeach; ?>
<br>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">TOTAL KEWAJIBAN</li>
        <li class="list-group-item"><?= array_sum($data['totalKewajiban']) ?></li>
    </ul>

</div>
<br>
<div class="container">
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">KEKAYAAN BERSIH</li>
        <li class="list-group-item"><?= array_sum($data['totalAset']) - array_sum($data['totalKewajiban']) ?></li>
    </ul>

</div>