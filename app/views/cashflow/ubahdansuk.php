<h1>Ubah Dana Masuk</h1>

    <form action="<?= BASEURL; ?>cashflow/editdansuk" method="post">
        <input type="hidden" name="id" value="<?= $data["dansuk"]["id"]; ?>">
        <ul>
            <li>
                <label for="nama">Ubah Dana Masuk : </label>
                <input type="text" name="nama" id="nama" value="<?= $data["dansuk"]["nama"]; ?>">
            </li>
            <li>
                <label for="tipe">Tipe Dana Masuk : </label>
                <select name="tipe" id="tipe">
                    <option <?= $data["dansuk"]["tipe"] == "Tetap"?"selected":""; ?> value="Tetap">Tetap</option>
                    <option <?= $data["dansuk"]["tipe"] == "Tidak Tetap"?"selected":""; ?> value="Tidak Tetap">Tidak Tetap</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Dana Masuk Rp: </label>
                <input type="number" name="nilai" id="nilai" value="<?= $data["dansuk"]["nilai"]; ?>">
            </li>
            <li>
                <button type="submit" name="submit">Ubah dana masuk</button>
            </li>
        </ul>
    </form>