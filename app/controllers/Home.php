<?php

Class Home Extends Controller {
    // Property

    // Method
    public function index()
    {   
        // Models
        $data['judul'] = 'Home';
        
        $data['aset'] = $this->model('Aset_model')->getAllAset();
        $data['kewajiban'] = $this->model('Kewajiban_model')->getAllKewajiban();
        
        $data['totalAset'] = array_sum(array_column($data['aset'], 'nilai'));
        $data['totalKewajiban'] = array_sum(array_column($data['kewajiban'], 'nilai'));
        
        $data['kayaBersih'] = $data['totalAset'] - $data['totalKewajiban'];
        $data['persenKaya'] = $data['kayaBersih'] / $data['totalAset'] * 100;
        

        $data['sumdansuk'] = array_sum(array_column($this->model('Dansuk_model')->getAllDansuk(), 'nilai'));
        $data['sumdankel'] = array_sum(array_column($this->model('Dankel_model')->getAllDankel(), 'nilai'));
        $data['sumAsetLik'] = array_sum(array_column($this->model('Aset_model')->getAsetByTipe(), 'nilai') );
        $data['sumKelInv'] = array_sum(array_column($this->model('Dankel_model')->getDankelByTipe('Tabungan & Investasi'), 'nilai') );
        $data['sumJangKel'] = array_sum(array_column($this->model('Dankel_model')->getDankelByTipe('Jangka Pendek'), 'nilai') ) + array_sum(array_column($this->model('Dankel_model')->getDankelByTipe('Jangka Panjang'), 'nilai') );

        $data['rasioTabung'] = $data['sumKelInv'] / $data['sumdansuk'] * 100;
        $data['rasioWajib'] = $data['totalKewajiban'] / $data['totalAset'] * 100;

        // Views
        $this->view('templates/header', $data);
        $this->view('home/index', $data);
        $this->view('templates/footer');
    }
}