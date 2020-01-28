<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=412, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#FFE1C4">

    <link rel="stylesheet" href="<?= BASEURL;?>css/bootstrap.css">

    <!-- pwa manifest -->
    <link rel="manifest" href="<?= BASEURL;?>manifest.json">

    <!-- ios support -->
    <link rel="apple-touch-icon" href="<?= BASEURL;?>icons/icon-96x96.png">
    <meta name="apple-mobile-web-app-status-bar" content="#aa7700">

    <title><?= $data['judul'] ?></title>
</head>
<body>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-firestore.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBr5hLM9ETjJT1N6qimmRrPTVhJJyZjmO8",
    authDomain: "financial-checkup-pwa.firebaseapp.com",
    databaseURL: "https://financial-checkup-pwa.firebaseio.com",
    projectId: "financial-checkup-pwa",
    storageBucket: "financial-checkup-pwa.appspot.com",
    messagingSenderId: "318252962795",
    appId: "1:318252962795:web:15863395e6372540e9ffae",
    measurementId: "G-ZBPHDG41WK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="<?= BASEURL; ?>">FC</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

                <li class="nav-item active">
                    <a class="nav-link" href="<?= BASEURL; ?>">Home <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="<?= BASEURL; ?>neraca">Neraca</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="<?= BASEURL; ?>cashflow">Cash Flow</a>
                </li>

            </ul>
        </div>
  </div>
</nav>
