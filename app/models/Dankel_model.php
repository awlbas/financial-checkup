<?php

class Dankel_model {

    // Property
    private $table = 'dankel';
    private $db;

    // Method
    public function __construct() 
    {
        $this->db = new Database;
    }

    // Query All Dana Keluar
    public function getAllDankel()
    {
        $this->db->query('SELECT * FROM ' . $this->table);
        return $this->db->resultSet();
    }

    // Query Dana Keluar By ID
    public function getDankelById($id)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id =:id');
        $this->db->bind('id', $id);
        return $this->db->Single();
    }

    // Query Dana Keluar By Tipe
    public function getDankelByTipe($tipe)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE tipe =:tipe');
        $this->db->bind('tipe', $tipe);
        return $this->db->resultSet();
    }

    // Tambah Dana Masuk
    public function tambahDataDankel($data)
    {
        $query = " INSERT INTO `dankel`(`nama`, `tipe`, `nilai`) VALUES (:nama,:tipe,:nilai) ";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);

        $this->db->execute();

        return $this->db->rowCount();
    }

    // Hapus Data Dana Keluar
    public function hapusDataDankel($id)
    {
        $query = "DELETE FROM `dankel` WHERE id = :id";
        $this->db->query($query);
        $this->db->bind('id', $id);

        $this->db->execute();

        return $this->db->rowCount();
    }

    // Ubah Data Dana Keluar
    public function ubahDataDankel($data)
    {
        $query = 
        "UPDATE dankel SET nama=:nama,tipe=:tipe,nilai=:nilai WHERE id=:id";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);
        $this->db->bind('id', $data['id']);

        $this->db->execute();

        return $this->db->rowCount();
    }

}