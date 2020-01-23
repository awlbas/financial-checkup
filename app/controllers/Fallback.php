<?php

Class Fallback Extends Controller {
    // Property

    // Index
    public function index()
    {   
        // Models
        $data['judul'] = 'Fallback';

        // Views
        $this->view('templates/header', $data);
        $this->view('fallback/index');
        $this->view('templates/footer');
    }
};