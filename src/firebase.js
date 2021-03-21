import firebase from 'firebase/app'
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_KEY,
    projectId: process.env.REACT_APP_FIREBASE_KEY,
    storageBucket: process.env.REACT_APP_FIREBASE_KEY,
    messagingSenderId: process.env.REACT_APP_FIREBASE_KEY,
});

export default app;