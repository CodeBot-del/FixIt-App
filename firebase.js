// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_B1c_XfIOw5OcyTOSS5EOcP5h2HAKDb4",
  authDomain: "fixit-1738.firebaseapp.com",
  projectId: "fixit-1738",
  storageBucket: "fixit-1738.appspot.com",
  messagingSenderId: "66243156902",
  appId: "1:66243156902:web:e2c2335b35da936be04d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db}