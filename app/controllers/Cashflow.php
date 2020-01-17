<?php

Class Cashflow Extends Controller {
    // Property

    // Index
    public function index()
    {   
        // Models
        $data['judul'] = 'Cash Flow';
        $data['dansuk'] = $this->model('Dansuk_model')->getAllDansuk();
        $data['dankel'] = $this->model('Dankel_model')->getAllDankel();
        $data['sumdansuk'] = array_column($data['dansuk'], 'nilai');
        $data['sumdankel'] = array_column($data['dankel'], 'nilai');

        // Views
        $this->view('templates/header', $data);
        $this->view('cashflow/index', $data);
        $this->view('templates/footer');
    }

    // Tambah Dana Masuk
    public function tambahDansuk()
    {   
        // Values
        $data['judul'] = 'Tambah Dana Masuk';

        // Views
        $this->view('templates/header', $data);
        $this->view('cashflow/tambahdansuk', $data);
        $this->view('templates/footer');
    }

    // Button Tambah Dana Masuk
    public function inputDansuk()
    {
        if( $this->model('Dansuk_model')->tambahDataDansuk($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'cashflow');
            exit;
        }
    }

    // Tambah Dana Masuk
    public function tambahDankel()
    {   
        // Values
        $data['judul'] = 'Tambah Dana Keluar';

        // Views
        $this->view('templates/header', $data);
        $this->view('cashflow/tambahdankel', $data);
        $this->view('templates/footer');
    }

    // Button Tambah Dana Keluar
    public function inputDankel()
    {
        if( $this->model('Dankel_model')->tambahDataDankel($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'cashflow');
            exit;
        }
    }

    // Hapus Dana Masuk
    public function hapusdansuk($id)
    {
        if( $this->model('Dansuk_model')->hapusDataDansuk($id) > 0 ) {
            header('Location: ' . BASEURL . 'cashflow');
            exit;
        }
    }

    // Hapus Dana Keluar
    public function hapusdankel($id)
    {
        if( $this->model('Dankel_model')->hapusDataDankel($id) > 0 ) {
            header('Location: ' . BASEURL . 'cashflow');
            exit;
        }
    }

    // Ubah Dana Masuk
    public function ubahdansuk($id)
    {   
        // Values
        $data['judul'] = 'Ubah Dana Masuk';
        $data['dansuk'] = $this->model('Dansuk_model')->getDansukById($id);

        // Views
        $this->view('templates/header', $data);
        $this->view('cashflow/ubahdansuk', $data);
        $this->view('templates/footer');
    }

    // Button Ubah Dana Masuk
    public function editDansuk()
    {
        if( $this->model('Dansuk_model')->ubahDataDansuk($_POST) > 0 ) {
            header('Location: ' . BASEURL . 'cashflow');
            exit;
        }
    }

     // Ubah Dana Keluar
     public function ubahdankel($id)
     {   
         // Values
         $data['judul'] = 'Ubah Dana Keluar';
         $data['dankel'] = $this->model('Dankel_model')->getDankelById($id);
 
         // Views
         $this->view('templates/header', $data);
         $this->view('cashflow/ubahdankel', $data);
         $this->view('templates/footer');
     }
 
     // Button Ubah Dana Keluar
     public function editDankel()
     {
         if( $this->model('Dankel_model')->ubahDataDankel($_POST) > 0 ) {
             header('Location: ' . BASEURL . 'cashflow');
             exit;
         }
     }

}