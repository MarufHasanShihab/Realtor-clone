// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRntKt7BAQ9VoHMYmPdQxDh0Jj1xcmEE",
  authDomain: "realtor-clone-4f583.firebaseapp.com",
  projectId: "realtor-clone-4f583",
  storageBucket: "realtor-clone-4f583.firebasestorage.app",
  messagingSenderId: "449582329520",
  appId: "1:449582329520:web:6608818fe9504eccdc5575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()

export {auth, db}