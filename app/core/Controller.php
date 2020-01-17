<?php

class Controller {
    // Property

// Method

    // View
    public function view($view, $data = [])
    {
        require_once '../app/views/' . $view . '.php';
    }

    // Model
    public function model($model)
    {
        require_once '../app/models/' . $model . '.php';
        return new $model;
    }
    
}