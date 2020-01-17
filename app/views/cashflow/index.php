<div class="container">

<br>
    <h5>DANA MASUK</h5><br>
    <a class="btn btn-primary" href="<?=BASEURL?>cashflow/tambahdansuk" role="button">Tambah Dana Masuk</a><br>

    <?php foreach( $data['dansuk'] as $danamasuk ) : ?>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><?= $danamasuk['nama']; ?></li>
            <li class="list-group-item"><?= $danamasuk['tipe']; ?></li>
            <li class="list-group-item"><?= $danamasuk['nilai']; ?></li>
            <li class="list-group-item"><a href="<?=BASEURL?>cashflow/hapusdansuk/<?= $danamasuk['id'] ?>" onclick="return confirm('yakin?');">Hapus</a></li>
            <li class="list-group-item"><a href="<?=BASEURL?>cashflow/ubahdansuk/<?= $danamasuk['id'] ?>">Ubah</a></li>
        </ul>
    <?php endforeach; ?>
<br>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">TOTAL DANA MASUK</li>
        <li class="list-group-item"><?= array_sum($data['sumdansuk']) ?></li>
    </ul>

</div>

<br>

<div class="container">

<br>
    <h5>DANA KELUAR</h5><br>
    <a class="btn btn-primary" href="<?=BASEURL?>cashflow/tambahdankel" role="button">Tambah Dana Keluar</a><br>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">Nama</li>
        <li class="list-group-item">Tipe</li>
        <li class="list-group-item">Nilai Rp</li>
    </ul>

    <?php foreach( $data['dankel'] as $dankel ) : ?>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><?= $dankel['nama']; ?></li>
            <li class="list-group-item"><?= $dankel['tipe']; ?></li>
            <li class="list-group-item"><?= $dankel['nilai']; ?></li>
            <li class="list-group-item"><a href="<?=BASEURL?>cashflow/hapusdankel/<?= $dankel['id'] ?>" onclick="return confirm('yakin?');">Hapus</a></li>
            <li class="list-group-item"><a href="<?=BASEURL?>cashflow/ubahdankel/<?= $dankel['id'] ?>">Ubah</a></li>
        </ul>
    <?php endforeach; ?>
<br>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">TOTAL DANA KELUAR</li>
        <li class="list-group-item"><?= array_sum($data['sumdankel']) ?></li>
    </ul>

</div>
<br>
<div class="container">
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">NILAI BERSIH PERUSAHAAN</li>
        <li class="list-group-item"><?= array_sum($data['sumdansuk']) - array_sum($data['sumdankel']) ?></li>
    </ul>

</div>