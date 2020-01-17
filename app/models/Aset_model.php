<?php

class Aset_model {

    // Property
    private $table = 'aset';
    private $db;

    // Method
    public function __construct() 
    {
        $this->db = new Database;
    }

    // Query
    public function getAllAset()
    {
        $this->db->query('SELECT * FROM ' . $this->table);
        return $this->db->resultSet();
    }

    public function getAsetById($id)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id =:id');
        $this->db->bind('id', $id);
        return $this->db->Single();
    }

    public function getAsetByTipe()
    {
        $this->db->query("SELECT * FROM " . $this->table . " WHERE tipe = 'Likuid' ");
        return $this->db->resultSet();
    }

    // Tambah Data Aset
    public function tambahDataAset($data)
    {
        $query = " INSERT INTO `aset` (`nama`, `tipe`, `nilai`) VALUES (:nama,:tipe,:nilai)";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function ubahDataAset($data)
    {
        $query = 
        "UPDATE aset SET nama=:nama,tipe=:tipe,nilai=:nilai WHERE id=:id";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);
        $this->db->bind('id', $data['id']);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function hapusDataAset($id)
    {
        $query = "DELETE FROM `aset` WHERE id = :id";
        $this->db->query($query);
        $this->db->bind('id', $id);

        $this->db->execute();

        return $this->db->rowCount();
    }

}