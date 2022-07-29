
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAzMVFyN8eO7hkbqY1A6Qvqb9f9HQ3pIZk",
      authDomain: "kwitter-3995b.firebaseapp.com",
      databaseURL:"https://kwitter-3995b-default-rtdb.firebaseio.com",
      projectId: "kwitter-3995b",
      storageBucket: "kwitter-3995b.appspot.com",
      messagingSenderId: "908317783053",
      appId: "1:908317783053:web:faa58cb090e26dd6671144",
      measurementId: "G-050X7JMMJV"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
z=localStorage.getItem("username");
document.getElementById("i").innerHTML="Welcome  "+z+"!";
function c(){
     d=document.getElementById("j").value; 
     firebase.database().ref("/").child(d).update({
      purpose:"addingroomname"
     });
     localStorage.setItem("roomname",d);
     window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name_is"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name1){
console.log(name1);
localStorage.setItem("roomname",name1);
window.location="kwitter_page.html";
}
function r(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
