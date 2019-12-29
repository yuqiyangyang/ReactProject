import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsYO3THsV6tBIgjN6robJmJCZCBA-Twg8",
    authDomain: "marioplan-c222e.firebaseapp.com",
    databaseURL: "https://marioplan-c222e.firebaseio.com",
    projectId: "marioplan-c222e",
    storageBucket: "marioplan-c222e.appspot.com",
    messagingSenderId: "868117437813",
    appId: "1:868117437813:web:9b0ab084ec0d7b031a073c",
    measurementId: "G-PEV938B21N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true })

  export default firebase;