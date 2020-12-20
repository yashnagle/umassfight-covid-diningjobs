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



var newLogin = {};
var numberforPriority1 = 2;
var numberforPriority2 = 4;
var numberforPriority3 = 2;
var priority1 = "cashier";
var priority2 = "line";
var priority3 = "bus";
var jobList = [];
document.addEventListener('DOMContentLoaded', submitHelper);
function submitHelper(){ 
    // let newLogin = {symptom1: "", symptom2: "", symptom3: ""};
    newLogin.name = document.getElementById('name').value;
    newLogin.symptom1 = document.getElementById('symptom1').value;
    newLogin.symptom2 = document.getElementById('symptom2').value;
    newLogin.symptom3 = document.getElementById('symptom3').value;

    //check is the updated jobList which doSomething returns
    if(newLogin.symptom1 === "no" && newLogin.symptom2 === "no" && newLogin.symptom3 === "no"){
        var check = doSomething();
        // console.log(check);
    }
    else if(newLogin.symptom1 === "no" && newLogin.symptom2 === "no" && newLogin.symptom3 === "yes"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else if(newLogin.symptom1 === "no" && newLogin.symptom2 === "yes" && newLogin.symptom3 === "no"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else if(newLogin.symptom1 === "yes" && newLogin.symptom2 === "no" && newLogin.symptom3 === "no"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else if(newLogin.symptom1 === "no" && newLogin.symptom2 === "yes" && newLogin.symptom3 === "yes"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else if(newLogin.symptom1 === "yes" && newLogin.symptom2 === "no" && newLogin.symptom3 === "yes"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else if(newLogin.symptom1 === "yes" && newLogin.symptom2 === "yes" && newLogin.symptom3 === "no"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else if(newLogin.symptom1 === "yes" && newLogin.symptom2 === "yes" && newLogin.symptom3 === "yes"){
        alert("After analysing your responses, we recommend you to stay home and take care of yourself.")
    }
    else{
        alert("Please fill out the questionnare!")
    }

    var arr = []
    var arr1 = []
    function gotData3(data){
        // console.log('Hi')
        var a = data.val()
        var keys = Object.keys(a)
        for(let i = 0; i<keys.length;++i){
            var k = keys[i]
            arr.push(k)
            arr1.push(a[k])
        }
        calculate()

            // if(!flag){
            // if(a[k].NumberOfJobs > 0){
            //     var j = a[k].Job;
            //     var nj = a[k].NumberOfJobs;
            //     var p = a[k].Priority;
            //     job1 = j;
            //     nj = nj - 1

            //     firebase.database().ref('Jobs/'+k).set({
            //         Job: j,
            //         Priority: p,
            //         NumberOfJobs: nj
            //     })
            //     flag = true
            //     alert('Job assigned to you is' + job1)
            //     break
            // }
            // else{
            //     continue
            // }
            // }
        }
        var job1 = ''
    function calculate(){
        for(let i =0;i<arr.length;++i){
            if(arr1[i].NumberOfJobs > 0){
                job1 = arr1[i].Job

                var j = arr1[i].Job;
                var nj = arr1[i].NumberOfJobs;
                var p = arr1[i].Priority;
                nj = nj - 1

                firebase.database().ref('Jobs/'+arr[i]).set({
                    Job: arr1[i].Job,
                    Priority:arr1[i].Priority,
                    NumberOfJobs: (arr1[i].NumberOfJobs-1)
                })
                alert(newLogin.name+' job assingned to you is '+job1)
                window.location.replace("http://127.0.0.1:5500/index.html");
                break;
            }
        }
    }


        // console.log(arr)
        // console.log(arr1)

    // function errData3(err){
    //     console.log('error')
    //     console.log(err)
    // }
    function doSomething(){

        database = firebase.database()
        var ref = database.ref('Jobs')
        ref.on('value', gotData3)

        // calculate();




        // if(numberforPriority1 !== 0){
        //     jobList.push({job: priority1, name: newLogin.name});
        //     alert("Thank you for filling out the questionnaire. Take Care");
        //     numberforPriority1 = numberforPriority1 - 1;
        // }
        // else if(numberforPriority2 !== 0){
        //     jobList.push({job: priority2, name: newLogin.name});
        //     alert("Thank you for filling out the questionnaire. Take Care");
        //     numberforPriority2 = numberforPriority2 - 1;
        // }
        // else if(numberforPriority3 !== 0){
        //     jobList.push({job: priority3, name: newLogin.name});
        //     alert("Thank you for filling out the questionnaire. Take Care");
        //     numberforPriority3 = numberforPriority3 - 1;
        // }
        // else{
        //     alert("JOBS ARE FULL NOW");
        // }

        // return jobList;
    }
}