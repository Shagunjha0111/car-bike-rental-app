

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-bike-rental-app.firebaseapp.com",
  projectId: "car-bike-rental-app",
  storageBucket: "car-bike-rental-app.appspot.com",
  messagingSenderId: "1023135859681",
  appId: "1:1023135859681:web:255fb36286975e93d048a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
