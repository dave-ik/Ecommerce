// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd79vgK697TmrUUjNXunSNI-mo0XsZDKM",
  authDomain: "authentication-ab547.firebaseapp.com",
  projectId: "authentication-ab547",
  storageBucket: "authentication-ab547.appspot.com",
  messagingSenderId: "951828428270",
  appId: "1:951828428270:web:d88df12c0f552674064aff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}