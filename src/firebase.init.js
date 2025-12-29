// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDShTDtVpfvVvVpU7Xi33oWaOpeTbRHD3Y",
  authDomain: "skill-swap-cf17d.firebaseapp.com",
  projectId: "skill-swap-cf17d",
  storageBucket: "skill-swap-cf17d.firebasestorage.app",
  messagingSenderId: "1081844861576",
  appId: "1:1081844861576:web:194b50c7ac654ecacead3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
