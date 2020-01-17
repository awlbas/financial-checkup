<?php

class Kewajiban_model {

    // Property
    private $table = 'kewajiban';
    private $db;

    // Method
    public function __construct() 
    {
        $this->db = new Database;
    }

    // Query Kewajiban
    public function getAllKewajiban()
    {
        $this->db->query('SELECT * FROM ' . $this->table);
        return $this->db->resultSet();
    }

    public function getWajibById($id)
    {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id =:id');
        $this->db->bind('id', $id);
        return $this->db->Single();
    }

     // Tambah Data Kewajiban
     public function tambahDataKewajiban($data)
     {
         $query = " INSERT INTO `kewajiban`(`nama`,`tipe`, `nilai`) VALUES (:nama,:tipe,:nilai) ";
 
         $this->db->query($query);
         $this->db->bind('nama', $data['nama']);
         $this->db->bind('tipe', $data['tipe']);
         $this->db->bind('nilai', $data['nilai']);
 
         $this->db->execute();
 
         return $this->db->rowCount();
     }

    public function hapusDataKewajiban($id)
    {
        $query = "DELETE FROM `kewajiban` WHERE id = :id";
        $this->db->query($query);
        $this->db->bind('id', $id);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function ubahDataWajib($data)
    {
        $query = 
        "UPDATE kewajiban SET nama=:nama,tipe=:tipe,nilai=:nilai WHERE id=:id";

        $this->db->query($query);
        $this->db->bind('nama', $data['nama']);
        $this->db->bind('tipe', $data['tipe']);
        $this->db->bind('nilai', $data['nilai']);
        $this->db->bind('id', $data['id']);

        $this->db->execute();

        return $this->db->rowCount();
    }
}
