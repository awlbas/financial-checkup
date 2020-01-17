<h1>Tambah Dana Masuk</h1>

    <form action="<?= BASEURL; ?>cashflow/inputdansuk" method="post">
        <ul>
            <li>
                <label for="nama">Nama Dana Masuk : </label>
                <input type="text" name="nama" id="nama">
            </li>
            <li>
                <label for="tipe">Tipe Dana Masuk : </label>
                <select name="tipe" id="tipe">
                    <option selected>Pilih Kategori ...</option>
                    <option value="Tetap">Tetap</option>
                    <option value="Tidak Tetap">Tidak Tetap</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Dana Masuk Rp: </label>
                <input type="number" name="nilai" id="nilai">
            </li>
            <li>
                <button type="submit" name="submit">Tambah Dana Masuk</button>
            </li>
        </ul>
    </form>