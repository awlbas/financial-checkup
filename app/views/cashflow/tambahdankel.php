<h1>Tambah Dana Keluar</h1>

    <form action="<?= BASEURL; ?>cashflow/inputdankel" method="post">
        <ul>
            <li>
                <label for="nama">Nama Dana Keluar : </label>
                <input type="text" name="nama" id="nama">
            </li>
            <li>
                <label for="tipe">Tipe Dana Keluar : </label>
                <select name="tipe" id="tipe">
                    <option selected>Pilih Kategori ...</option>
                    <option value="Perusahaan">Perusahaan</option>
                    <option value="Operasional">Operasional</option>
                    <option value="Jangka Pendek">Jangka Pendek</option>
                    <option value="Jangka Panjang">Jangka Panjang</option>
                    <option value="Tabungan & Investasi">Tabungan & Investasi</option>
                    <option value="Proteksi">Proteksi</option>
                    <option value="Konsumtif">Konsumtif</option>
                    <option value="Variabel">Variabel</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Dana Keluar Rp: </label>
                <input type="number" name="nilai" id="nilai">
            </li>
            <li>
                <button type="submit" name="submit">Tambah Dana Keluar</button>
            </li>
        </ul>
    </form>