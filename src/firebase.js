// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
apiKey: "AIzaSyCU-_p3jnaFLcAX0b79vtqwV4YIrFR2_MU",
  authDomain: "fir-demo-app-123.firebaseapp.com",
  projectId: "fir-demo-app-123",
  storageBucket: "fir-demo-app-123.appspot.com",
  messagingSenderId: "758910539471",
  appId: "1:758910539471:web:7bcb5b162bfdd0ef123abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app); // 🔸 This is important

// Export them
export { auth, db };
