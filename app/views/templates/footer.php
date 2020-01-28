<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="<?= BASEURL;?>js/bootstrap.min.js" integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P" crossorigin="anonymous"></script>

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
<script src="<?= BASEURL;?>js/app.js"></script>
<script src="<?= BASEURL;?>js/ui.js"></script>
<script src="<?= BASEURL;?>js/db.js"></script>

</body>
</html>