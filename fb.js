import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword
  ,onAuthStateChanged
  ,signInWithEmailAndPassword,
  signOut
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDPJlKwzHpapLyEd_-1Oul3JesJg6BAxA",
  authDomain: "saylani-hakathon-e322e.firebaseapp.com",
  projectId: "saylani-hakathon-e322e",
  storageBucket: "saylani-hakathon-e322e.appspot.com",
  messagingSenderId: "901144129962",
  appId: "1:901144129962:web:5968f44ebdaff19e467bd3",
  measurementId: "G-M4G50LK7VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut};