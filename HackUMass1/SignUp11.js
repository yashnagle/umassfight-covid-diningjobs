var firebaseConfig = {
    apiKey: "AIzaSyBDW0mCZLwBUgDMk5a_HiX05QqfMquG-Fc",
    authDomain: "usercredentials-37e92.firebaseapp.com",
    projectId: "usercredentials-37e92",
    storageBucket: "usercredentials-37e92.appspot.com",
    messagingSenderId: "936069039405",
    appId: "1:936069039405:web:9b7b07524be85772e03fa4",
    measurementId: "G-NEKTY6J0DE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var newLogin = {}
  newLogin.Car = 'Hi'
document.addEventListener("DOMContentLoaded", function() {
    // newLogin.email = document.getElementById('email1');
    console.log(document.getElementById('password'))
    newLogin.password = document.getElementById('password');
    newLogin.password = document.getElementById('name');
})

function sendContact1(){
    // firebase.database().ref('Credentials/'+ count).set({
    //     Job: 'Cleaning',
    //     Password: 213
    //  })
    console.log('Hi')
    console.log(newLogin)
}
