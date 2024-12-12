// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = 
{  apiKey: "AIzaSyAtDmhJ4RS_E5UGvAFQmf5LGyJ58O7UfHQ",
  authDomain: "blogging-app12345.firebaseapp.com",
  projectId: "blogging-app12345",
  storageBucket: "blogging-app12345.firebasestorage.app",
  messagingSenderId: "210284765268",
  appId: "1:210284765268:web:40b7833467260e7047cdc1",
  measurementId: "G-HNBFC4P041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)