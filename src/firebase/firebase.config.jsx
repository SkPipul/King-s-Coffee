// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ks3t3i_a3XBAvslRe_ZzB2NhIwpAiX0",
  authDomain: "kings-coffee-6e4e9.firebaseapp.com",
  projectId: "kings-coffee-6e4e9",
  storageBucket: "kings-coffee-6e4e9.appspot.com",
  messagingSenderId: "429566880150",
  appId: "1:429566880150:web:95b50bdc3ab182535155b7",
  measurementId: "G-7YPTPH1GX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);