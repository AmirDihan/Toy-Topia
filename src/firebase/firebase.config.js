// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsinLN0--oGjRXqA9uoMPB8OfLsvtt0I",
  authDomain: "toy-topia-firebase-auth-12712.firebaseapp.com",
  projectId: "toy-topia-firebase-auth-12712",
  storageBucket: "toy-topia-firebase-auth-12712.firebasestorage.app",
  messagingSenderId: "1040621378759",
  appId: "1:1040621378759:web:ffe4a6ea47466ff5da32e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);