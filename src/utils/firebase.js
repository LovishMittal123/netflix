// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCW-C8CQIhLVlOk511-9yBRL9Deg5H8kM",
  authDomain: "netflix-78124.firebaseapp.com",
  projectId: "netflix-78124",
  storageBucket: "netflix-78124.appspot.com",
  messagingSenderId: "346534130116",
  appId: "1:346534130116:web:8496890c37cae397b87491",
  measurementId: "G-PBDM6X2VR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth=getAuth();