// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1d6Pja8mwy2Rw1QCm55ZfApHT0tJ6Xqo",
  authDomain: "chill-gamer-cbb5d.firebaseapp.com",
  projectId: "chill-gamer-cbb5d",
  storageBucket: "chill-gamer-cbb5d.firebasestorage.app",
  messagingSenderId: "352956940095",
  appId: "1:352956940095:web:083562ad7a15f8595bdd8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

