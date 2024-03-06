// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO2tE2qQHCHKbhyP8_sjWg7jqfY2omYbY",
  authDomain: "taskviewer-50e83.firebaseapp.com",
  projectId: "taskviewer-50e83",
  storageBucket: "taskviewer-50e83.appspot.com",
  messagingSenderId: "181672966498",
  appId: "1:181672966498:web:2f71a878ed9fcf1376143b",
  measurementId: "G-8MG97KGF2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();