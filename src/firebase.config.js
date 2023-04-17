// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqASkbkWSa-Okfvhuq8fiTC5olgSGgG5M",
  authDomain: "email-password-auth-f0e5a.firebaseapp.com",
  projectId: "email-password-auth-f0e5a",
  storageBucket: "email-password-auth-f0e5a.appspot.com",
  messagingSenderId: "298355626720",
  appId: "1:298355626720:web:3b3eaf8572c0665a3df685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;