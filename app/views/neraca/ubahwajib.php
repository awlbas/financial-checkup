<h1>Ubah Aset</h1>

    <form action="<?= BASEURL; ?>neraca/editwajib" method="post">
        <input type="hidden" name="id" value="<?= $data["wajib"]["id"]; ?>">
        <ul>
            <li>
                <label for="nama">Ubah Aset : </label>
                <input type="text" name="nama" id="nama" value="<?= $data["wajib"]["nama"]; ?>">
            </li>
            <li>
                <label for="tipe">Tipe Kewajiban : </label>
                <select name="tipe" id="tipe">
                    <option <?= $data["wajib"]["tipe"] == "Jangka Pendek"?"selected":""; ?> value="Jangka Pendek">Jangka Pendek</option>
                    <option <?= $data["wajib"]["tipe"] == "Jangka Panjang"?"selected":""; ?> value="Jangka Panjang">Jangka Panjang</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Aset Rp: </label>
                <input type="number" name="nilai" id="nilai" value="<?= $data["wajib"]["nilai"]; ?>">
            </li>
            <li>
                <button type="submit" name="submit">Ubah Aset</button>
            </li>
        </ul>
    </form>