// // firebase connection
// var firebaseConfig = {
//     apiKey: "AIzaSyB60-uldbtY8VVmn960lHbtqcHjV9uDIb4",
//     authDomain: "form-3d1e1.firebaseapp.com",
//     databaseURL: "https://form-3d1e1.firebaseio.com",
//     projectId: "form-3d1e1",
//     storageBucket: "form-3d1e1.appspot.com",
//     messagingSenderId: "991618735932",
//     appId: "1:991618735932:web:9781df44b5e64f79cdc839"
//   };

// //   init
// firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore();
// var firebaseRef = firebase.ref('Information');

// // start grabbing or DOM ELement

// const submitBtn = document.querySelector("#submit");

// let userName = document.querySelector("#userFullName");
// let userEmail = document.querySelector("#userEmail");
// let userMassage = document.querySelector("#userMassage");

// const db = firestore.collection("contactData");

// submitBtn.addEventListener("click", function() {
//     let userNameInput = userName.value;
//     let userEmailInput = userEmail.value;
//     let userMassageInput = userMassage.value;

//     // Access the Database collection
//     db.doc()
//     .set({
//         name: userNameInput,
//         email: userEmailInput,
//         massage: userMassageInput
//     })
//     .then(function(){
//         console.log("Data Saved");
//     })
//     .catch(function(){
//         console.log(error);
//     });
// });

// firebaseRef.on("value",function(snapshot){
 
//     snapshot.forEach(function(element){
    
//         document.querySelector('#root').innerHTML +=`<div>${element.val()}</div>`});
       
//    });



  
  
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyBE6HKZacwFjcdRpX9-9JP0182ysYFQkNo",
    authDomain: "form-1-7ac4e.firebaseapp.com",
    databaseURL: "https://form-1-7ac4e.firebaseio.com",
    projectId: "form-1-7ac4e",
    storageBucket: "form-1-7ac4e.appspot.com",
    messagingSenderId: "195279977621",
    appId: "1:195279977621:web:700050fb6ff484f57c2f9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");
        // Listen for a submit

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();
    window.location.replace("C:\Users\Nilesh\Documents\GitHub\Web-Assignment\showData.html");
}


// Save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
    name: name,
    email: email,
    message: message,
    
    });
}
 
       //   retrive info
 function retriveInfos(){
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}


function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);
    
    for(let i = 0; i < keys.length; i++){
        let infoData = keys[i];
        let name = info[infoData].name;
        let email = info[infoData].email;
        let message = info[infoData].message;
        console.log(name,email,message);

        let infosResults = document.querySelector(".infosResults");

        infosResults.innerHTML += `<div class="container">
        <table id="exampleTable" class="table table-striped table-bordered" style="width:70%"> 
            <thead id="thead">
                <tr style="background-color: #1573ff">
                    <th><strong>Name: </strong>${name}<th>
                    <th><strong>Email: </strong>${email}<th>
                    <th><strong>Message: </strong>${message}<th>
                <tr>
            </thead>
        </table>
        </div>`;        
    }
}
retriveInfos();

    // $(document).ready(function() {
    //     $('#exampleTable').DataTable();
    // } );



 
// <div class="container">
//     <table id="exampleTable" class="table table-striped table-bordered" style="width: 70%">
//         <thead id="thead">
//         <tr style="background-color: #1573ff">
//             <th>Name</th>
//             <th>Position</th>
//             <th>Office</th>
//             <th>Age</th>
//             <th>Start date</th>
//             <th>Salary</th>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//             <td>Donna Snider</td>
//             <td>Customer Support</td>
//             <td>New York</td>
//             <td>27</td>
//             <td>2011/01/25</td>
//             <td>$112,000</td>
//         </tr>
//         </tbody>
//         <tfoot>
//         <tr>
//             <th>Name</th>
//             <th>Position</th>
//             <th>Office</th>
//             <th>Age</th>
//             <th>Start date</th>
//             <th>Salary</th>
//         </tr>
//         </tfoot>
//     </table>
// </div>