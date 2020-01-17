<h1>Ubah Dana Keluar</h1>

    <form action="<?= BASEURL; ?>cashflow/editdankel" method="post">
        <input type="hidden" name="id" value="<?= $data["dankel"]["id"]; ?>">
        <ul>
            <li>
                <label for="nama">Ubah Dana Keluar : </label>
                <input type="text" name="nama" id="nama" value="<?= $data["dankel"]["nama"]; ?>">
            </li>
            <li>
                <label for="tipe">Tipe Dana Keluar : </label>
                <select name="tipe" id="tipe">
                    <option <?= $data["dankel"]["tipe"] == "Perusahaan"?"selected":""; ?> value="Perusahaan">Perusahaan</option>
                    <option <?= $data["dankel"]["tipe"] == "Operasional"?"selected":""; ?> value="Operasional">Operasional</option>
                    <option <?= $data["dankel"]["tipe"] == "Jangka Pendek"?"selected":""; ?> value="Jangka Pendek">Jangka Pendek</option>
                    <option <?= $data["dankel"]["tipe"] == "Jangka Panjang"?"selected":""; ?> value="Jangka Panjang">Jangka Panjang</option>
                    <option <?= $data["dankel"]["tipe"] == "Tabungan & Investasi"?"selected":""; ?> value="Tabungan & Investasi">Tabungan & Investasi</option>
                    <option <?= $data["dankel"]["tipe"] == "Proteksi"?"selected":""; ?> value="Proteksi">Proteksi</option>
                    <option <?= $data["dankel"]["tipe"] == "Konsumtif"?"selected":""; ?> value="Konsumtif">Konsumtif</option>
                    <option <?= $data["dankel"]["tipe"] == "Variabel"?"selected":""; ?> value="Variabel">Variabel</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Dana Keluar Rp: </label>
                <input type="number" name="nilai" id="nilai" value="<?= $data["dankel"]["nilai"]; ?>">
            </li>
            <li>
                <button type="submit" name="submit">Ubah dana keluar</button>
            </li>
        </ul>
    </form>