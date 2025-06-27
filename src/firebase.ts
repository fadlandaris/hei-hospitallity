// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAC_7qjPiGCNnlNYOopyJRs_VNBufm4hk",
  authDomain: "hei-hospitallity.firebaseapp.com",
  projectId: "hei-hospitallity",
  storageBucket: "hei-hospitallity.firebasestorage.app",
  messagingSenderId: "130951074787",
  appId: "1:130951074787:web:6fa1c1182406172454c6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);