// Import the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA5RBdfI8_iwcY10oncy5bxEDbDvCp9DVM",
  authDomain: "sixer-alumni.firebaseapp.com",
  projectId: "sixer-alumni",
  storageBucket: "sixer-alumni.appspot.com",
  messagingSenderId: "1012204401682",
  appId: "1:1012204401682:web:49c3e17559af09d91654cb",
  measurementId: "G-GYM1DBZ019"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
console.log('Firebase App Initialized:', app);

// Initialize Firestore, Authentication, and Storage
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // Add storage initialization

export default app;
