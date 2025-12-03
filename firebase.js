// firebase.js (ES module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKF1eXOowCS35ylhonxvdy9QBiLYLmvzY",
  authDomain: "crht-proj.firebaseapp.com",
  databaseURL: "https://crht-proj-default-rtdb.firebaseio.com",
  projectId: "crht-proj",
  storageBucket: "crht-proj.firebasestorage.app",
  messagingSenderId: "957104910274",
  appId: "1:957104910274:web:5a7463a011d5f68583305b",
  measurementId: "G-4BTK874XF4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth, ref, push, onValue, remove, set, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
