// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFl0xb_EWSle-68lF4cmWaK8RvngX1eA",
  authDomain: "email-pass-auth-1c721.firebaseapp.com",
  projectId: "email-pass-auth-1c721",
  storageBucket: "email-pass-auth-1c721.firebasestorage.app",
  messagingSenderId: "701020179534",
  appId: "1:701020179534:web:e82feeed8ce1a23948871f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);