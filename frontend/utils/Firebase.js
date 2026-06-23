// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {

  apiKey: "import.meta.env.VITE_FIREBASE_APIKEY",
  authDomain: "loginsnazzymart.firebaseapp.com",
  projectId: "loginsnazzymart",
  storageBucket: "loginsnazzymart.firebasestorage.app",
  messagingSenderId: "581337482589",
  appId: "1:581337482589:web:9b6c6d7695fac1dcbd94b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
