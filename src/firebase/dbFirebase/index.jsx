import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAEU04orjXfjSccBpakkfkfoA35KO7l6AE",
    authDomain: "wulpersstudio.firebaseapp.com",
    databaseURL: "https://wulpersstudio.firebaseio.com",
    projectId: "wulpersstudio",
    storageBucket: "wulpersstudio.appspot.com",
    messagingSenderId: "1028004040819",
    appId: "1:1028004040819:web:93dcc9dad365dedd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export default db;