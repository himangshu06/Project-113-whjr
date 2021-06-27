// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7bPJUJJ4CDdeGB9jirvsLdp4FjsbbHEs",
    authDomain: "project-113-whitehatjr-extra.firebaseapp.com",
    databaseURL: "https://project-113-whitehatjr-extra-default-rtdb.firebaseio.com",
    projectId: "project-113-whitehatjr-extra",
    storageBucket: "project-113-whitehatjr-extra.appspot.com",
    messagingSenderId: "734445348972",
    appId: "1:734445348972:web:39233ed007b07629e19049"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function User(){
      window.location.replace="frame.html";
      window.location="frame.html";

      var synth = window.speechSynthesis;
     speak_data1 = "Thanks for supporting Super Snaper Loading WebPage";
     var utterThis = new SpeechSynthesisUtterance(speak_data1);
     synth.speak(utterThis);
 }

