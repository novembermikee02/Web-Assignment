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
        
      var firebaseRef = firebase.database().ref().child('login');
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        document.getElementById("login").addEventListener("click",function(){
          var username = document.getElementById("username");
          var password = document.getElementById("pass");
          if (username.value==loginInfo.username && password.value==loginInfo.password){
            location.replace("home.html");
          }else if(username.value!=loginInfo.username){
            username.style.borderColor="red";
          }else if(password.value!=loginInfo.password){
            password.style.borderColor="red";
          }
        });
      });

      document.getElementById('pass').addEventListener("input",function(){
        document.getElementById("pass").style.borderColor="#ccc";
      });
      document.getElementById('username').addEventListener("input",function(){
        document.getElementById("username").style.borderColor="#ccc";
      });