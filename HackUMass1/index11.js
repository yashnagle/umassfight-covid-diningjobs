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

  var login = {email:'',password:0}
  var login1 = {email:'',password:0}
  document.addEventListener("DOMContentLoaded", function() {
      login.email = document.getElementById('email');
      login.password = document.getElementById('passw');
  })

  document.addEventListener("DOMContentLoaded", function() {
    login1.email = document.getElementById('email1');
    login1.password = document.getElementById('passw1');
})

function gotData(data){

    var a = data.val()
    var keys = Object.keys(a);
    let flag = false;
    for(let i = 0;i< keys.length;++i){
        var k = keys[i]
        var username = a[k].Username
        var password = a[k].Password

        if(username == login.email.value){
            if(password == login.password.value){
                //Redirect to next page                
                window.location.replace("http://127.0.0.1:5500/questionnaire.html");
                flag = true
                flag1 = true
                break
            }
            else{
                break
            }
        }
    }
    if(!flag){
        alert('Username or password incorrect');
        window.location.replace("http://127.0.0.1:5500/index.html");
    }
}
function errData(err){
    console.log('error')
    console.log(err)
}


function sendContact(){

    

    database = firebase.database()
var ref = database.ref('Credentials')
ref.on('value', gotData, errData)
var a = document.getElementById('email')
}

function sendContact1(){
    let name = document.getElementById('name');
    name = name.value
    let password = login1.password.value
    let email = login1.email.value

    firebase.database().ref('Credentials/'+name).set({
        Name: name,
        Username: email,
        Password: password,
        Job: 'None'
    })
    alert('Sign Up Successful')
    
}

function errData1(err){
    console.log('error')
    console.log(err)
}

function gotData1(data){
    // console.log('Hi')
    var a = data.val()
    var keys = Object.keys(a);
    let flag = false;
    for(let i = 0;i< keys.length;++i){
        var k = keys[i]
        a[k].Jobs = 'dkjfbeiu'
        var name3 = a[k].Name;
        var job1 = a[k].Job;
        var password1 = a[k].Password;
        var username1 = a[k].Username
        firebase.database().ref('Credentials/'+name3).set({
            Name: name3,
            Username: username1,
            Password: password1,
            Job: 'None'
        })
}
firebase.database().ref('Jobs/'+'A').set({
    Job: 'Cashier',
    Priority: 'high',
    NumberOfJobs: 2
}) 
firebase.database().ref('Jobs/'+'B').set({
    Job: 'Line',
    Priority: 'Med',
    NumberOfJobs: 4
})
firebase.database().ref('Jobs/'+'C').set({
    Job: 'Bus',
    Priority: 'Low',
    NumberOfJobs: 2
})
}

function sendContact2(){
    if(login.password.value == 123){
        database = firebase.database()
        var ref = database.ref('Credentials')
        ref.on('value', gotData1, errData1)

        alert('Reset Successful')
    }
    else{
        alert('Incorrect Password')
        window.location.replace("http://127.0.0.1:5500/index.html");
    }
    
}