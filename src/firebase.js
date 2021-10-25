import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEuCcrPsUxU3X--0qe4CvehiG3XFHbNME",
  authDomain: "rentapp-79a06.firebaseapp.com",
  projectId: "rentapp-79a06",
  storageBucket: "rentapp-79a06.appspot.com",
  messagingSenderId: "389824216354",
  appId: "1:389824216354:web:44c009f7e6dcd92280b97b",
  measurementId: "G-0SVBPYE50Z"
});

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();
const firestore = firebase.firestore();

export { db, auth, storage, firestore };
