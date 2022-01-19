import firebase from 'firebase/app'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2WKjFkP3UqkVnGor8VCtLeh5iTQ637Po",
  authDomain: "mindx-app.firebaseapp.com",
  projectId: "mindx-app",
  storageBucket: "mindx-app.appspot.com",
  messagingSenderId: "500225466743",
  appId: "1:500225466743:web:324967bca43007f689c172",
  measurementId: "G-0BFHW3S73N"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;