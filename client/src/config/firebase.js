// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    confirmPasswordReset,
    verifyPasswordResetCode,
    onIdTokenChanged,
    deleteUser,

} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj7HQAdheUAcOm_bYFV8vnzOnmIKaWhXw",
  authDomain: "book-movie-manager.firebaseapp.com",
  projectId: "book-movie-manager",
  storageBucket: "book-movie-manager.appspot.com",
  messagingSenderId: "528048555799",
  appId: "1:528048555799:web:529063d0af59166bfc9952",
  measurementId: "G-8VN77L6498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

const firebase = {
    onAuthStateChanged: onAuthStateChanged.bind(null, auth),
    signInWithEmailAndPassword: signInWithEmailAndPassword.bind(null, auth),
    createUserWithEmailAndPassword: createUserWithEmailAndPassword.bind(null, auth),
    signOut: signOut.bind(null, auth),
    onIdTokenChanged: onIdTokenChanged.bind(null, auth),
    sendEmailVerification,
    deleteUser,
};

export default firebase;