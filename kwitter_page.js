//YOUR FIREBASE LINKS
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

    e2=localStorage.getItem("username");
      r1=localStorage.getItem("roomname");
function t(){
     m1=document.getElementById("h").value;
firebase.database().ref(r1).push({
      name1:e2,
      meassage:m1,
      like:0
});
 document.getElementById("h").value="";
}

function getData() { firebase.database().ref("/"+r1).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name1'];
message = message_data['meassage'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(r1).child(message_id).update({
            like : updated_likes
      });
}

function u(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";  
}