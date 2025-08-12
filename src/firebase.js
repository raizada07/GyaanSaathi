// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpfYQ6Wma6c9B7NtWu-coUEj45IMLfi3A",
  authDomain: "gyaansaathi-backend.firebaseapp.com",
  projectId: "gyaansaathi-backend",
  storageBucket: "gyaansaathi-backend.appspot.com",
  messagingSenderId: "896654402107",
  appId: "1:896654402107:web:20d52a70b5ba762c22321e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

export { db, storage };
