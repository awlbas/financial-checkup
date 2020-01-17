<h1>Tambah Aset</h1>

    <form action="<?= BASEURL; ?>neraca/inputaset" method="post">
        <ul>
            <li>
                <label for="nama">Nama Aset : </label>
                <input type="text" name="nama" id="nama">
            </li>
            <li>
                <label for="tipe">Tipe Aset : </label>
                <select name="tipe" id="tipe">
                    <option selected>Pilih Kategori ...</option>
                    <option value="Likuid">Likuid</option>
                    <option value="Investasi">Investasi</option>
                    <option value="Perusahaan">Perusahaan</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Aset Rp: </label>
                <input type="number" name="nilai" id="nilai">
            </li>
            <li>
                <button type="submit" name="submit">Tambah Aset</button>
            </li>
        </ul>
    </form>