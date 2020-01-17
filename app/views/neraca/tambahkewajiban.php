<h1>Tambah Aset</h1>

    <form action="<?= BASEURL; ?>neraca/inputkewajiban" method="post">
        <ul>
            <li>
                <label for="nama">Nama Kewajiban : </label>
                <input type="text" name="nama" id="nama">
            </li>
            <li>
                <label for="tipe">Tipe Kewajiban : </label>
                <select name="tipe" id="tipe">
                    <option selected>Pilih Kategori ...</option>
                    <option value="Jangka Pendek">Jangka Pendek</option>
                    <option value="Jangka Panjang">Jangka Panjang</option>
                </select>
            </li>
            <li>
                <label for="nilai">Nilai Kewajiban Rp: </label>
                <input type="number" name="nilai" id="nilai">
            </li>
            <li>
                <button type="submit" name="submit">Tambah Kewajiban</button>
            </li>
        </ul>
    </form>