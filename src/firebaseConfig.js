// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvAmNl8sC1AWbtMBRy4L-ETdBfMgo6HDo",
    authDomain: "linkedin-3dc28.firebaseapp.com",
    projectId: "linkedin-3dc28",
    storageBucket: "linkedin-3dc28.firebasestorage.app",
    messagingSenderId: "1092091976876",
    appId: "1:1092091976876:web:b8fe5e5e9de0e20d059309",
    measurementId: "G-K64PTF9G9N"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
