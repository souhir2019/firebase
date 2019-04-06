
  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA14YYvEKnMAKO2lFpwJKMVWOTgC9xXHio",
    authDomain: "fir-1-954bb.firebaseapp.com",
    databaseURL: "https://fir-1-954bb.firebaseio.com",
    projectId: "fir-1-954bb",
    storageBucket: "fir-1-954bb.appspot.com",
    messagingSenderId: "308979562909"
  };
  firebase.initializeApp(config);


//References messages collection

var messagesRef = firebase.database().ref("messages");

//Listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

}
//Get values

var name = getInputVal("name");
var company = getInputVal("company");
var email = getInputVal("email");
var phone = getInputVal("phone");
var name = getInputVal("message");

// Save message
saveMessage(name, company, email, phone, message);

//show alert
document.querySelector('.alert').style.display = "block";

//Hide alert after 3 sec

setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
}, 3000);

//Fonction to get Form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name : name,
    company : company,
    email : email,
    phone : phone,
    message : message

    });
}
