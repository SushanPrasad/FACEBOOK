// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW6i_W6zsunskZZY60j5o9qnAYwCuMrwo",
  authDomain: "facebook-suji.firebaseapp.com",
  projectId: "facebook-suji",
  storageBucket: "facebook-suji.appspot.com",
  messagingSenderId: "65862690640",
  appId: "1:65862690640:web:5ca400c76990e32f48ee55",
  measurementId: "G-DRQ2FCVLM6"
};








const firebaseApp = firebase.initializeApp (firebaseConfig);
console.log('firebase;;;;',firebaseApp)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;