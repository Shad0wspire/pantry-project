// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpJS-HfVPBeIUTNtIWTMiZeoVAIdzD9tk",
  authDomain: "inventory-management-f63e2.firebaseapp.com",
  projectId: "inventory-management-f63e2",
  storageBucket: "inventory-management-f63e2.appspot.com",
  messagingSenderId: "123400702372",
  appId: "1:123400702372:web:2685393a41c431f0801931",
  measurementId: "G-0FVBR6K568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};