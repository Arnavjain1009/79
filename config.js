import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDQQS4yvy5QMwn_XzPX8rrUFWqdMEnyxd8",
  authDomain: "e-library-7bf27.firebaseapp.com",
  projectId: "e-library-7bf27",
  storageBucket: "e-library-7bf27.appspot.com",
  messagingSenderId: "632585938518",
  appId: "1:632585938518:web:597ac28226341a5fed3df7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
