<?php

Class Neraca Extends Controller {
    // Property

    // Method
    public function index()
    {   
        // Models
        $data['judul'] = 'Neraca';
        $data['aset'] = $this->model('Aset_model')->getAllAset();
        $data['kewajiban'] = $this->model('Kewajiban_model')->getAllKewajiban();
        $data['totalAset'] = array_column($data['aset'], 'nilai');
        $data['totalKewajiban'] = array_column($data['kewajiban'], 'nilai');
        

        // Views
        $this->view('templates/header', $data);
        $this->view('neraca/index', $data);
        $this->view('templates/footer');
    }

    public function tambahaset()
    {   
        // Values
        $data['judul'] = 'Tambah Aset';

        // Views
        $this->view('templates/header', $data);
        $this->view('neraca/tambahaset', $data);
        $this->view('templates/footer');
    }

    public function ubahaset($id)
    {   
        // Values
        $data['judul'] = 'Ubah Aset';
        $data['aset'] = $this->model('Aset_model')->getAsetById($id);

        // Views
        $this->view('templates/header', $data);
        $this->view('neraca/ubahaset', $data);
        $this->view('templates/footer');
    }

    public function ubahwajib($id)
    {   
        // Values
        $data['judul'] = 'Ubah Kewajiban';
        $data['wajib'] = $this->model('Kewajiban_model')->getWajibById($id);

        // Views
        $this->view('templates/header', $data);
        $this->view('neraca/ubahwajib', $data);
        $this->view('templates/footer');
    }
    
    public function inputaset()
    {
        if( $this->model('Aset_model')->tambahDataAset($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'neraca');
            exit;
        }
    }

    public function editAset()
    {
        if( $this->model('Aset_model')->ubahDataAset($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'neraca');
            exit;
        }
    }

    public function editWajib()
    {
        if( $this->model('Kewajiban_model')->ubahDataWajib($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'neraca');
            exit;
        }
    }

    public function tambahkewajiban()
    {   
        // Values
        $data['judul'] = 'Tambah kewajiban';

        // Views
        $this->view('templates/header', $data);
        $this->view('neraca/tambahkewajiban', $data);
        $this->view('templates/footer');
    }

    public function inputkewajiban()
    {
        if( $this->model('Kewajiban_model')->tambahDataKewajiban($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'neraca');
            exit;
        }
    }

    public function hapusAset($id)
    {
        if( $this->model('Aset_model')->hapusDataAset($id) > 0 ) {
            header('Location: ' . BASEURL . 'neraca');
            exit;
        }
    }

    public function hapuskewajiban($id)
    {
        if( $this->model('Kewajiban_model')->hapusDataKewajiban($id) > 0 ) {
            header('Location: ' . BASEURL . 'neraca');
            exit;
        }
    }
}