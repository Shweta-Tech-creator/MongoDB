
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAohzayYdVlVL9yy4w3UbvQvECM42tpVlw",
  authDomain: "campus-textbook-exchange.firebaseapp.com",
  databaseURL: "https://campus-textbook-exchange-default-rtdb.firebaseio.com",
  projectId: "campus-textbook-exchange",
  storageBucket: "campus-textbook-exchange.firebasestorage.app",
  messagingSenderId: "618796036845",
  appId: "1:618796036845:web:a49d29164bfb82593752e4",
  measurementId: "G-MSRGT2Q27H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the services
export const auth = getAuth(app);
export const database = getDatabase(app);

export const logout = () => signOut(auth);
