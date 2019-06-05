  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyASnI1xdZCXTJ-Qp_U_hFQiShfOUXQ1Dhc",
    authDomain: "bonjo-react-aplan.firebaseapp.com",
    databaseURL: "https://bonjo-react-aplan.firebaseio.com",
    projectId: "bonjo-react-aplan",
    storageBucket: "bonjo-react-aplan.appspot.com",
    messagingSenderId: "78669849584",
    appId: "1:78669849584:web:5f17a99f38229f5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
  