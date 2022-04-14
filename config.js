import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {

    apiKey: "AIzaSyCF3xEf_B8pBM0tpP-fBhhswis5oD0S2xY",
  
    authDomain: "e-ride-f1279.firebaseapp.com",
  
    projectId: "e-ride-f1279",
  
    storageBucket: "e-ride-f1279.appspot.com",
  
    messagingSenderId: "787436832386",
  
    appId: "1:787436832386:web:f7b6bdd345e88f30b4569b"
  
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
