// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlDxdA7Mxqsa__MhER-2Ro7nZaCh3QZMk",
  authDomain: "netflix-gpt-2b661.firebaseapp.com",
  projectId: "netflix-gpt-2b661",
  storageBucket: "netflix-gpt-2b661.firebasestorage.app",
  messagingSenderId: "1057252008856",
  appId: "1:1057252008856:web:8632b91dc9e05a89c101ed",
  measurementId: "G-RGXS8BVY64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = getAuth();