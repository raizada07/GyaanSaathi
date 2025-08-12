// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getStorage } from "firebase/storage"; // ✅ storage import

// ✅ Tumhara Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDpfYQ6Wma6c9B7NtWu-coUEj45IMLfi3A",
  authDomain: "gyaansaathi-backend.firebaseapp.com",
  databaseURL: "https://gyaansaathi-backend-default-rtdb.firebaseio.com",
  projectId: "gyaansaathi-backend",
  storageBucket: "gyaansaathi-backend.appspot.com", // ✅ correct format
  messagingSenderId: "896654402107",
  appId: "1:896654402107:web:20d52a70b5ba762c22321e",
  measurementId: "G-GZ3Y9YMNBY"
};

// ✅ Firebase init
const app = initializeApp(firebaseConfig);

// ✅ Realtime DB & Storage
const db = getDatabase(app);
const storage = getStorage(app);

export { db, ref, push, storage };
