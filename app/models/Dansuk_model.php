<?php

class Dansuk_model {

    // Property
    private $table = 'dansuk';
    private $db;

    // Method
    public function __construct() 
    {
        $this->db = new Database;
    }

    // Query All Dana Masuk
    public function getAllDansuk()
    {
        $this->db->query('SELECT * FROM ' . $this->table);
        return $this->db->resultSet();
    }

    // Query Dana Masuk By ID
    public function getDansukById($id)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id =:id');
        $this->db->bind('id', $id);
        return $this->db->Single();
    }
    
    // Tambah Dana Masuk
    public function tambahDataDansuk($data)
    {
        $query = " INSERT INTO `dansuk`(`nama`, `tipe`, `nilai`) VALUES (:nama,:tipe,:nilai) ";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);

        $this->db->execute();

        return $this->db->rowCount();
    }

    // Hapus Data Dana Masuk
    public function hapusDataDansuk($id)
    {
        $query = "DELETE FROM `dansuk` WHERE id = :id";
        $this->db->query($query);
        $this->db->bind('id', $id);

        $this->db->execute();

        return $this->db->rowCount();
    }

    // Ubah Data Dana Masuk
    public function ubahDataDansuk($data)
    {
        $query = 
        "UPDATE dansuk SET nama=:nama,tipe=:tipe,nilai=:nilai WHERE id=:id";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);
        $this->db->bind('id', $data['id']);

        $this->db->execute();

        return $this->db->rowCount();
    }
}