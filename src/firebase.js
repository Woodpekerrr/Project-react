// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1SdcxjYe_nQ9Sbh4BjpCpdQbMeC4ZXX4",
  authDomain: "registerapp-3b52a.firebaseapp.com",
  projectId: "registerapp-3b52a",
  storageBucket: "registerapp-3b52a.firebasestorage.app",
  messagingSenderId: "95195526969",
  appId: "1:95195526969:web:c22fdc8f0b82c5d37a1ae8",
  measurementId: "G-7515Q13R3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
