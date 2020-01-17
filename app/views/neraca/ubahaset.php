<h1>Ubah Aset</h1>

    <form action="<?= BASEURL; ?>neraca/editaset" method="post">
        <input type="hidden" name="id" value="<?= $data["aset"]["id"]; ?>">
        <ul>
            <li>
                <label for="nama">Ubah Aset : </label>
                <input type="text" name="nama" id="nama" value="<?= $data["aset"]["nama"]; ?>">
            </li>
            <li>
                <label for="tipe">Tipe Aset : </label>
                <select name="tipe" id="tipe">
                    <option <?= $data["aset"]["tipe"] == "Likuid"?"selected":""; ?> value="Likuid">Likuid</option>
                    <option <?= $data["aset"]["tipe"] == "Investasi"?"selected":""; ?> value="Investasi">Investasi</option>
                    <option <?= $data["aset"]["tipe"] == "Perusahaan"?"selected":""; ?> value="Perusahaan">Perusahaan</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Aset Rp: </label>
                <input type="number" name="nilai" id="nilai" value="<?= $data["aset"]["nilai"]; ?>">
            </li>
            <li>
                <button type="submit" name="submit">Ubah Aset</button>
            </li>
        </ul>
    </form>