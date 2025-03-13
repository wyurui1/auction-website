import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW02mdnoFqIKE4n9ZYfcLLAchncpYKMb4",
  authDomain: "auction-system-c2fa4.firebaseapp.com",
  projectId: "auction-system-c2fa4",
  storageBucket: "auction-system-c2fa4.firebasestorage.app",
  messagingSenderId: "475553186990",
  appId: "1:475553186990:web:de34a00338617bdf4c993f",
  measurementId: "G-424YV32FWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
